import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNg9LaJgDoZdCdKd8q3GEiw_Pl1j_8Vfo",
  authDomain: "dev-fb-messenger-clone.firebaseapp.com",
  databaseURL: "https://dev-fb-messenger-clone.firebaseio.com",
  projectId: "dev-fb-messenger-clone",
  storageBucket: "dev-fb-messenger-clone.appspot.com",
  messagingSenderId: "125246162057",
  appId: "1:125246162057:web:b3762ebc1edb9557e97258",
  measurementId: "G-7HKBB4VKW3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
