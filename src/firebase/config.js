import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAgGGJpcf7T2ZwjFKkdd-2JyQIx-MTrr78",
    authDomain: "photo-gallery-717fc.firebaseapp.com",
    projectId: "photo-gallery-717fc",
    storageBucket: "photo-gallery-717fc.appspot.com",
    messagingSenderId: "1012912145529",
    appId: "1:1012912145529:web:6ba32b6e171d45c08b00a8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp}
 

