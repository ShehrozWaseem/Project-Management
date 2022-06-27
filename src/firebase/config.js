import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA_v7pAsSwcgRVVegm-BkKA03jgMQC0GrI",
  authDomain: "projectmanagement-e812f.firebaseapp.com",
  projectId: "projectmanagement-e812f",
  storageBucket: "projectmanagement-e812f.appspot.com",
  messagingSenderId: "371124313552",
  appId: "1:371124313552:web:70eb4b6635a623459fadd5"
};

firebase.initializeApp(firebaseConfig);
const projFirestore = firebase.firestore()
const projAuth = firebase.auth()
const projStorage = firebase.storage()
const timeStamp = firebase.firestore.Timestamp

export {projAuth,projFirestore,projStorage,timeStamp}