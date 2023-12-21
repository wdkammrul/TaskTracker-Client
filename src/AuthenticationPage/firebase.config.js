// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLXaPnYbQ6OMmEXlmauXL0nKEjVr78gcw",
  authDomain: "tasktracker-d82b0.firebaseapp.com",
  projectId: "tasktracker-d82b0",
  storageBucket: "tasktracker-d82b0.appspot.com",
  messagingSenderId: "309350011987",
  appId: "1:309350011987:web:22ec677bcdc25fd68f22a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;