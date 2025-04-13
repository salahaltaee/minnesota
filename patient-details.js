import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDKSesdZluaV5uzJJTAZ0NdH6TqOGP-YCA",
  authDomain: "minnesota-279cc.firebaseapp.com",
  projectId: "minnesota-279cc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const urlParams = new URLSearchParams(window.location.search);
const patientId = urlParams.get("id");

const patientName = document.getElementById("patientName");
const patientAge = document.getElementById("patientAge");
const resultSection = document.getElementById("resultSection");

onAuthStateChanged(auth, async (user) => {
  if (!user || !patientId) {
    window.location.href = "login.html";
    return;
  }

  const patientRef = doc(db, `psychologists/${user.uid}/patients/${patientId}`);
  const patientSnap = await getDoc(patientRef);

  if (!patientSnap.exists()) {
    patientName.textContent = "❌ المريض غير موجود.";
    return;
  }

  const data = patientSnap.data();
  patientName.textContent = `👤 الاسم: ${data.name}`;
  patientAge.textContent = `العمر: ${data.age}`;

  const resultsSnap = await getDocs(collection(patientRef, "results"));
  if (resultsSnap.empty) {
    resultSection.innerHTML = "<p class='text-muted'>لا توجد نتائج حتى الآن.</p>";
    return;
  }

  const resultDoc = resultsSnap.docs[resultsSnap.docs.length - 1];
  const result = resultDoc.data();
  const answers = result.answers;

  const lieIndices = [15,30,45,60,75,90,105,120,135,150,165,195,225,255,285];
  const lieScore = lieIndices.filter(i => answers[i] === "لا").length;

  resultSection.innerHTML = `
    <div class="col-md-6">
      <div class="card p-3 bg-white shadow-sm">
        <h6 class="mb-1">مقياس الكذب</h6>
        <p class="mb-0">عدد "لا" على الأسئلة: <strong>${lieScore}</strong></p>
      </div>
    </div>`;
});
