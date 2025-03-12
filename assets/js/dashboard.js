// assets/js/dashboard.js
document.addEventListener('DOMContentLoaded', function() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('User is signed in:', user);
      // User is signed in.  Let them stay on the dashboard.
    } else {
      // No user is signed in. Redirect to sign-in page (now index.html).
      window.location.href = 'index.html';
    }
  });

  const signOutButton = document.getElementById('sign-out-button');
  if(signOutButton) {
    signOutButton.addEventListener('click', function() {
      firebase.auth().signOut()
        .then(() => {
          window.location.href = 'index.html'; // Redirect to sign-in after logout
        })
        .catch((error) => {
          console.error("Sign out error:", error);
        });
    });
  }
});