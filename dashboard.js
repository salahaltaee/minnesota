// dashboard.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import {
  getFirestore,
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

const patientsList = document.getElementById("patientsList");
const logoutBtn = document.getElementById("logoutBtn");

// التأكد من تسجيل الدخول
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userId = user.uid;
    const querySnapshot = await getDocs(collection(db, `psychologists/${userId}/patients`));
    if (querySnapshot.empty) {
      patientsList.innerHTML = "<p class='text-muted'>لا يوجد مرضى مضافين بعد.</p>";
    } else {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        patientsList.innerHTML += `
          <div class="col-md-6">
            <div class="card p-3">
              <h5>${data.name}</h5>
              <p>العمر: ${data.age}</p>
              <a href="patient-details.html?id=${doc.id}" class="btn btn-outline-info btn-sm">عرض التفاصيل</a>
            </div>
          </div>`;
      });
    }
  } else {
    window.location.href = "login.html";
  }
});

// تسجيل الخروج
logoutBtn.addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
});
