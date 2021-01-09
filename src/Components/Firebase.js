
import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA99SY91UK-dzUocLcwLPPEyK139XzpACo",
    authDomain: "clone-a2f50.firebaseapp.com",
    databaseURL: "https://clone-a2f50.firebaseio.com",
    projectId: "clone-a2f50",
    storageBucket: "clone-a2f50.appspot.com",
    messagingSenderId: "750549909070",
    appId: "1:750549909070:web:df89ca2b5ba6ca8bda4d1f",
    measurementId: "G-EFCSB32PG0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };