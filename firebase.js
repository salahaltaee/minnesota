// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDKSesdZluaV5uzJJTAZ0NdH6TqOGP-YCA",
  authDomain: "minnesota-279cc.firebaseapp.com",
  projectId: "minnesota-279cc",
  storageBucket: "minnesota-279cc.appspot.com",
  messagingSenderId: "911418209993",
  appId: "1:911418209993:web:your-app-id", // إذا عندك App ID الفعلي أضيفه هنا
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
