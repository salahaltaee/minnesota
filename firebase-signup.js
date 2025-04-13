import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDKSesdZluaV5uzJJTAZ0NdH6TqOGP-YCA",
  authDomain: "minnesota-279cc.firebaseapp.com",
  projectId: "minnesota-279cc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = "dashboard.html")
    .catch((error) => {
      document.getElementById("error").textContent = "خطأ: " + error.message;
    });
});
