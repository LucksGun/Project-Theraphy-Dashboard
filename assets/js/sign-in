// assets/js/sign-in.js
document.addEventListener('DOMContentLoaded', function() {
    const signInForm = document.getElementById('sign-in-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    signInForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;

        firebase.auth().signInWithEmailAndPassword(email, password)
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