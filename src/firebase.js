import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

console.log(firebase.auth);
const firebaseConfig = {
  apiKey: "AIzaSyD4P2O44NmZTKwTTXOFHQ7EagisywfX11o",
  authDomain: "player-d58bb.firebaseapp.com",
  projectId: "player-d58bb",
  storageBucket: "player-d58bb.appspot.com",
  messagingSenderId: "844427477438",
  appId: "1:844427477438:web:d29dc6341a89607966b9ef",
  measurementId: "G-34T4TB8YW3",
};

const firebaseAPP = firebase.initializeApp(firebaseConfig);
const db = firebaseAPP.firestore();
const auth = firebase.default.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
