import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDQr9piZeK8bcJtTWz2aqqy2BJ5H2wOWjY",
  authDomain: "chinacommunitydays-502ed.firebaseapp.com",
  projectId: "chinacommunitydays-502ed",
  storageBucket: "chinacommunitydays-502ed.firebasestorage.app",
  messagingSenderId: "581839597790",
  appId: "1:581839597790:web:abba23977afda9a10bd24f",
  measurementId: "G-EB6FHWD70E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;