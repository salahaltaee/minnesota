import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getFirestore, collection, getDocs, addDoc
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import {
  getAuth, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDKSesdZluaV5uzJJTAZ0NdH6TqOGP-YCA",
  authDomain: "minnesota-279cc.firebaseapp.com",
  projectId: "minnesota-279cc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const form = document.getElementById("sessionForm");
const patientSelect = document.getElementById("patient");

onAuthStateChanged(auth, async (user) => {
  if (!user) return window.location.href = "login.html";

  // جلب قائمة المرضى
  const patientsRef = collection(db, `psychologists/${user.uid}/patients`);
  const snapshot = await getDocs(patientsRef);
  snapshot.forEach(doc => {
    const d = doc.data();
    const option = document.createElement("option");
    option.value = doc.id;
    option.textContent = d.name;
    patientSelect.appendChild(option);
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const patientId = patientSelect.value;
    const patientName = patientSelect.options[patientSelect.selectedIndex].text;
    const date = document.getElementById("date").value;
    const notes = document.getElementById("notes").value;

    await addDoc(collection(db, `psychologists/${user.uid}/sessions`), {
      patientId, patientName, date, notes
    });

    alert("✅ تمت إضافة الجلسة بنجاح.");
    window.location.href = "sessions.html";
  });
});
