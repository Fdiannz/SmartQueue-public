import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "smartqueue-c6ad1.firebaseapp.com",
  projectId: "smartqueue-c6ad1",
  storageBucket: "smartqueue-c6ad1.firebasestorage.app",
  messagingSenderId: "109108993325",
  appId: "1:109108993325:web:abe31fec6cee5a3ab7c7a4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const branches = [
  "woodlands", 
  "ang_mo_kio", 
  "bukit_timah", 
  "toa_payoh", 
  "thomson",
  "choa_chu_kang",
  "holland_village"
];

// Avg service times derived from your seed script's random ranges:
// General: calledAt + 3-11 min → avg ~7 min
// Account: slightly longer → avg ~10 min
// Loan: longest → avg ~15 min
const serviceStats = [
  { serviceType: "General", avgServiceTime: 7 },
  { serviceType: "Account", avgServiceTime: 10 },
  { serviceType: "Loan", avgServiceTime: 15 },
];

async function seedServiceStats() {
  for (const branch of branches) {
    for (const { serviceType, avgServiceTime } of serviceStats) {
      const docId = `${branch}_${serviceType}`;
      await setDoc(doc(db, "serviceStats", docId), {
        branchId: branch,
        serviceType,
        avgServiceTime,
        totalServiceMinutes: avgServiceTime * 60, // placeholder: 60 samples worth
        serviceSampleCount: 60,
      });
      console.log(`Seeded serviceStats/${docId}`);
    }
  }

  console.log("Done! 21 serviceStats documents written.");
  process.exit(0);
}

seedServiceStats().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
