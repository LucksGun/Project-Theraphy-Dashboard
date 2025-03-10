// assets/js/dashboard.js
document.addEventListener('DOMContentLoaded', function() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('User is signed in:', user);
      } else {
        window.location.href = 'sign-in.html'; // Redirect to sign-in if not logged in
      }
    });

      const signOutButton = document.getElementById('sign-out-button');
      signOutButton.addEventListener('click', function() {
          firebase.auth().signOut()
          .then(() => {
              window.location.href = 'sign-in.html'
          }).catch((error) => {
              console.error("sign out error", error);
          });
      });
  });