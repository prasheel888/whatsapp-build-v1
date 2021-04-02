import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZ-G_F1tHafruQ_z8eMry_p9ZhHt6IQvk",
  authDomain: "whatsapp-build-7ff23.firebaseapp.com",
  projectId: "whatsapp-build-7ff23",
  storageBucket: "whatsapp-build-7ff23.appspot.com",
  messagingSenderId: "712653490318",
  appId: "1:712653490318:web:036eb8ba25f7cc805ea1df",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
