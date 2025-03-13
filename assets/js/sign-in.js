// assets/js/sign-in.js
document.addEventListener('DOMContentLoaded', function() {
    console.log("sign-in.js loaded and DOMContentLoaded fired"); // Debugging

    const signInForm = document.getElementById('sign-in-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (!signInForm || !emailInput || !passwordInput) {
        console.error("CRITICAL ERROR: One or more form elements (sign-in-form, email, password) not found!");
        alert("Error: Form elements not found. Check your HTML IDs.");
        return; // Stop execution
    }

    signInForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Sign-in form submitted"); // Debugging

        const email = emailInput.value;
        const password = passwordInput.value;

        console.log("Email:", email, "Password:", password); // Debugging

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in successfully!
                console.log("Sign-in successful:", userCredential.user); // Debugging
                window.location.href = 'dashboard.html';
            })
            .catch((error) => {
                // Handle errors
                console.error('Sign-in error:', error.code, error.message); // Debugging
                alert('Error signing in: ' + error.message);
            });
    });
});