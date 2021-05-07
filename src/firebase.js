import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDecvoX_AX9cVHH-gw_l_A-UtvGpcXWBz8",
  authDomain: "clone-e09ab.firebaseapp.com",
  projectId: "clone-e09ab",
  storageBucket: "clone-e09ab.appspot.com",
  messagingSenderId: "825559799294",
  appId: "1:825559799294:web:605bca6793e53a03e09caf",
  measurementId: "G-V2KZ7C72BC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };