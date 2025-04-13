import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDKSesdZluaV5uzJJTAZ0NdH6TqOGP-YCA",
  authDomain: "minnesota-279cc.firebaseapp.com",
  projectId: "minnesota-279cc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const patientId = localStorage.getItem("patientId");
const userId = localStorage.getItem("userId");
const resultContainer = document.getElementById("results");

let latestResults = [];
let latestResultDocId = "";

async function fetchResults() {
  const resultsRef = collection(db, `psychologists/${userId}/patients/${patientId}/results`);
  const snapshot = await getDocs(resultsRef);
  let lastResult = null;

  snapshot.forEach(docSnap => {
    lastResult = docSnap.data();
    latestResultDocId = docSnap.id;
  });

  if (lastResult && lastResult.results) {
    latestResults = lastResult.results;
    lastResult.results.forEach(item => {
      const card = document.createElement("div");
      card.className = "col-md-4";
      card.innerHTML = `
        <div class="card shadow">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">الدرجة: <strong>${item.score}</strong></p>
          </div>
        </div>
      `;
      resultContainer.appendChild(card);
    });
  } else {
    resultContainer.innerHTML = "<p class='text-muted'>لا توجد نتائج مسجلة حتى الآن.</p>";
  }
}

document.getElementById("saveNote").addEventListener("click", async () => {
  const noteText = document.getElementById("notes").value.trim();
  if (!noteText) {
    alert("⚠️ الرجاء كتابة ملاحظة أولاً.");
    return;
  }

  try {
    const resultRef = doc(db, `psychologists/${userId}/patients/${patientId}/results/${latestResultDocId}`);
    await updateDoc(resultRef, {
      note: noteText
    });
    alert("✅ تم حفظ الملاحظة بنجاح.");
  } catch (err) {
    console.error(err);
    alert("❌ حدث خطأ أثناء حفظ الملاحظة.");
  }
});

document.getElementById("sendWhatsApp").addEventListener("click", () => {
  let message = "نتائج المريض:\\n";
  latestResults.forEach(item => {
    message += `• ${item.name}: ${item.score}\\n`;
  });

  const notes = document.getElementById("notes").value.trim();
  if (notes) {
    message += `\\nملاحظات الطبيب:\\n${notes}`;
  }

  const encodedMessage = encodeURIComponent(message);
  const phone = prompt("📱 أدخل رقم واتساب لإرسال النتائج (مع مفتاح الدولة):");
  if (phone) {
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  }
});

fetchResults();
