// assets/js/index.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAhbxpAHqtZ62QSytUKW9ZwcUIOeh76DEc", // YOUR ACTUAL API KEY
    authDomain: "project-theraphy.firebaseapp.com",
    databaseURL: "https://project-theraphy-default-rtdb.firebaseio.com",
    projectId: "project-theraphy",
    storageBucket: "project-theraphy.appspot.com",
    messagingSenderId: "674828852767",
    appId: "1:674828852767:web:5ddcb6accb5c681325bf2a",
    measurementId: "G-J2QYRQ8WTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', function() {
    const signInForm = document.getElementById('sign-in-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    signInForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in successfully
                window.location.href = 'dashboard.html'; // Redirect to dashboard
            })
            .catch((error) => {
                // Handle errors
                alert('Error signing in: ' + error.message);
            });
    });
});