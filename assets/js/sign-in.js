// assets/js/sign-in.js
document.addEventListener('DOMContentLoaded', function() {
    console.log("sign-in.js loaded and DOMContentLoaded fired"); // DEBUG

    const signInForm = document.getElementById('sign-in-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (!signInForm || !emailInput || !passwordInput) {
        console.error("CRITICAL ERROR: One or more form elements (sign-in-form, email, password) not found!");
        alert("Error: Form elements not found. Check your HTML IDs.");
        return; // Stop execution if elements are missing
    }

    signInForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Sign-in form submitted"); // DEBUG

        const email = emailInput.value;
        const password = passwordInput.value;

        console.log("Email:", email, "Password:", password); // DEBUG - VERY IMPORTANT

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in successfully!
                console.log("Sign-in SUCCESSFUL:", userCredential.user); // DEBUG
                window.location.href = 'dashboard.html';
            })
            .catch((error) => {
                // Handle errors
                console.error('Sign-in ERROR:', error.code, error.message); // DEBUG
                alert('Error signing in: ' + error.message);
            });
    });
});