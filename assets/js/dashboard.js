import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAhbxpAHqtZ62QSytUKW9ZwcUIOeh76DEc",
  authDomain: "project-theraphy.firebaseapp.com",
  databaseURL: "https://project-theraphy-default-rtdb.firebaseio.com",
  projectId: "project-theraphy",
  storageBucket: "project-theraphy.firebasestorage.app",
  messagingSenderId: "674828852767",
  appId: "1:674828852767:web:5ddcb6accb5c681325bf2a",
  measurementId: "G-J2QYRQ8WTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// assets/js/dashboard.js
document.addEventListener('DOMContentLoaded', function() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log('User is signed in:', user);
        } else {
            window.location.href = 'index.html'; // Redirect to sign-in if not logged in
        }
    });

    const signOutButton = document.getElementById('sign-out-button');
    if (signOutButton) {
        signOutButton.addEventListener('click', function() {
            signOut(auth)
                .then(() => {
                    window.location.href = 'index.html'; // Redirect to sign-in after logout
                })
                .catch((error) => {
                    console.error("Sign out error:", error);
                });
        });
    }
});