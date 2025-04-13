import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDKSesdZluaV5uzJJTAZ0NdH6TqOGP-YCA",
  authDomain: "minnesota-279cc.firebaseapp.com",
  projectId: "minnesota-279cc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const form = document.getElementById("patientForm");

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();

    try {
      const docRef = await addDoc(collection(db, `psychologists/${user.uid}/patients`), {
        name,
        age,
        createdAt: new Date()
      });

      // ✅ حفظ المريض في LocalStorage
      localStorage.setItem("patientId", docRef.id);

      // ✅ الانتقال إلى صفحة الاختبار
      window.location.href = "questions.html";

    } catch (error) {
      console.error("خطأ في الإضافة:", error);
      alert("فشل في إضافة المريض: " + error.message);
    }
  });
});
