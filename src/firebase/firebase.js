// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBjBwIytoZHwMzNc2kt__bJdZzmBnjOGE8",
  authDomain: "twitter-clone-db533.firebaseapp.com",
  projectId: "twitter-clone-db533",
  storageBucket: "twitter-clone-db533.appspot.com",
  messagingSenderId: "941316632709",
  appId: "1:941316632709:web:52afe224575ffe739c79ec",
  measurementId: "G-61Y2KE0YE1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;