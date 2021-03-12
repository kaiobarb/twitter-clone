import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAemi36TrxLLRCrWa8S3V47QckbyUmkrmY",
    authDomain: "twitter-clone-c8efc.firebaseapp.com",
    projectId: "twitter-clone-c8efc",
    storageBucket: "twitter-clone-c8efc.appspot.com",
    messagingSenderId: "128807136947",
    appId: "1:128807136947:web:3896f5d5302683fec74ac6",
    measurementId: "G-0FRYD5WRCW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;