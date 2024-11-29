// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsGIPMr5MON95nqU5KTpLiM2TqdBGetkM",
  authDomain: "prueba-evaluada.firebaseapp.com",
  projectId: "prueba-evaluada",
  storageBucket: "prueba-evaluada.firebasestorage.app",
  messagingSenderId: "611023404299",
  appId: "1:611023404299:web:8a30ebb697b211c866f60e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app