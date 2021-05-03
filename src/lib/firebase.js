import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAGsv8mTBZiwJcZR6yGCFDXQy_-hjktWoM",
  authDomain: "instagram-clone-ca702.firebaseapp.com",
  projectId: "instagram-clone-ca702",
  storageBucket: "instagram-clone-ca702.appspot.com",
  messagingSenderId: "941312994322",
  appId: "1:941312994322:web:8bf3585810af3986067ccb"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log('firebase', firebase);

export { firebase, FieldValue };