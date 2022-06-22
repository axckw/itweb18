// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhMwPom_DxX5r4sPUTQJ4GSTKpuexVU_w",
  authDomain: "fewlnwza007-92ae7.firebaseapp.com",
  projectId: "fewlnwza007-92ae7",
  storageBucket: "fewlnwza007-92ae7.appspot.com",
  messagingSenderId: "637850391484",
  appId: "1:637850391484:web:6206cc8364830dbfea91b9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig).firestore();

export default app;
