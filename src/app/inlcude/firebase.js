import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBc8sHR6rOm1FiLvr0x6r8rCaZkzgpEGPk",
  authDomain: "bandhan-33221.firebaseapp.com",
  databaseURL: "https://bandhan-33221-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bandhan-33221",
  storageBucket: "bandhan-33221.appspot.com",
  messagingSenderId: "105054411742",
  appId: "1:105054411742:web:858d168cd7a658acd51b4f",
  measurementId: "G-RFW71M8Y6Q"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };