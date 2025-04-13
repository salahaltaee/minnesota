import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getFirestore, collection, getDocs
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import {
  getAuth, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// إعداد Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDKSesdZluaV5uzJJTAZ0NdH6TqOGP-YCA",
  authDomain: "minnesota-279cc.firebaseapp.com",
  projectId: "minnesota-279cc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const container = document.getElementById("sessionsList");

onAuthStateChanged(auth, async (user) => {
  if (!user) return window.location.href = "login.html";

  const sessionsRef = collection(db, `psychologists/${user.uid}/sessions`);
  const snapshot = await getDocs(sessionsRef);

  if (snapshot.empty) {
    container.innerHTML = "<p class='text-muted'>لا توجد جلسات مسجلة.</p>";
    return;
  }

  snapshot.forEach(doc => {
    const s = doc.data();
    container.innerHTML += `
      <div class="col-md-6">
        <div class="card p-3">
          <h5>${s.patientName}</h5>
          <p>📅 ${s.date}</p>
          <p>📝 ${s.notes}</p>
        </div>
      </div>
    `;
  });
});
