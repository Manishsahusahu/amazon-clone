// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyB0enf6lwRIsIL6JRDrVK88ykYkggBqwFk",
   authDomain: "clone-cfe44.firebaseapp.com",
   projectId: "clone-cfe44",
   storageBucket: "clone-cfe44.appspot.com",
   messagingSenderId: "195231626846",
   appId: "1:195231626846:web:4c7b20e9254bce4f9a66cf",
   measurementId: "G-0S1YL18H6P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };
