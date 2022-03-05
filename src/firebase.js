// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA5d3MTI4enzfCxaw268Ef8d0FzGVGWvIY",
    authDomain: "netflix-clone-profile.firebaseapp.com",
    projectId: "netflix-clone-profile",
    storageBucket: "netflix-clone-profile.appspot.com",
    messagingSenderId: "1026020867755",
    appId: "1:1026020867755:web:057acae36da5b23b2cc1ee",
    measurementId: "G-7E1ZXQ3S1E"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;