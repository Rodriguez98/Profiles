import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiZ1GwjK42BGhjX_fs2eFT_TQdCmb24YU",
  authDomain: "profiles-ea689.firebaseapp.com",
  projectId: "profiles-ea689",
  storageBucket: "profiles-ea689.appspot.com",
  messagingSenderId: "775115424153",
  appId: "1:775115424153:web:f7001a22013336d8dc9308"
};
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
