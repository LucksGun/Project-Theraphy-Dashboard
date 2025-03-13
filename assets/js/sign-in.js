// assets/js/sign-in.js
document.addEventListener('DOMContentLoaded', function() {
    const signInForm = document.getElementById('sign-in-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    signInForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Form submitted"); // Add this

        const email = emailInput.value;
        const password = passwordInput.value;

        console.log("Email:", email, "Password:", password); // Add this

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("Sign-in successful:", userCredential.user); // Add this
                window.location.href = 'dashboard.html';
            })
            .catch((error) => {
                console.error('Sign-in error:', error.code, error.message); // Add this
                alert('Error signing in: ' + error.message);
            });
    });
});