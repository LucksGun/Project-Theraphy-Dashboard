// assets/js/firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyAhbxpAHqtZ62QSytUKW9ZwcUIOeh76DEc", // USE YOUR ACTUAL API KEY!
  authDomain: "project-theraphy.firebaseapp.com",
  databaseURL: "https://project-theraphy-default-rtdb.firebaseio.com",
  projectId: "project-theraphy",
  storageBucket: "project-theraphy.appspot.com",
  messagingSenderId: "674828852767",
  appId: "1:674828852767:web:5ddcb6accb5c681325bf2a",
  measurementId: "G-J2QYRQ8WTK"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();