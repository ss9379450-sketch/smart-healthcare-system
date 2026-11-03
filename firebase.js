
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5DcZG5NL3Oa2Ip0JUlpoVG5TiUIi1uk8",
  authDomain: "smart-healthcare-system-99b85.firebaseapp.com",
  projectId: "smart-healthcare-system-99b85",
  storageBucket: "smart-healthcare-system-99b85.firebasestorage.app",
  messagingSenderId: "355698240506",
  appId: "1:355698240506:web:8645a04b3d94605222d243",
  measurementId: "G-FQGMTKE97G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
