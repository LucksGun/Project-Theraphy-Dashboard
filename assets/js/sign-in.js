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
          const user = userCredential.user;
          console.log('User signed in:', user);
          window.location.href = 'dashboard.html'; // Redirect to your dashboard page
        })
        .catch((error) => {
          // Handle errors
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Sign-in error:', errorCode, errorMessage);
          alert('Error signing in: ' + errorMessage); // Display error to the user
        });
    });
  });