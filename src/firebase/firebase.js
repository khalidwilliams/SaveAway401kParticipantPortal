import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const prodConfig = {
  apiKey: "AIzaSyBwYvPc1FNxA8s01AghQsDoLhI3YJgL3CE",
  authDomain: "saveaway-401k.firebaseapp.com",
  databaseURL: "https://saveaway-401k.firebaseio.com",
  projectId: "saveaway-401k",
  storageBucket: "saveaway-401k.appspot.com",
  messagingSenderId: "841374586547"
};

const devConfig = {
  apiKey: "AIzaSyBwYvPc1FNxA8s01AghQsDoLhI3YJgL3CE",
  authDomain: "saveaway-401k.firebaseapp.com",
  databaseURL: "https://saveaway-401k.firebaseio.com",
  projectId: "saveaway-401k",
  storageBucket: "saveaway-401k.appspot.com",
  messagingSenderId: "841374586547"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth, config };
