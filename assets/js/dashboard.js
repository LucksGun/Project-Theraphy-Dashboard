// assets/js/dashboard.js
console.log("dashboard.js loaded"); // Add this line

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded fired"); // Add this line

    firebase.auth().onAuthStateChanged((user) => {
        console.log("onAuthStateChanged called", user); // Add this line
        if (user) {
            console.log('User is signed in:', user);
        } else {
            console.log("User is NOT signed in - redirecting"); // Add this
            window.location.href = 'index.html';
        }
    });

    const signOutButton = document.getElementById('sign-out-button');
    if (signOutButton) {
        signOutButton.addEventListener('click', function() {
            firebase.auth().signOut()
                .then(() => {
                    window.location.href = 'index.html'; // Redirect to sign-in
                })
                .catch((error) => {
                    console.error("Sign out error:", error);
                });
        });
    }
});