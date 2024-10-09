function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // You can also send the ID token to your server for verification
    var id_token = googleUser.getAuthResponse().id_token;
    console.log('ID Token: ' + id_token);
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}
function navigateToAnotherPage() {
    window.location.href = 'tutor.html'; // Change this to your target URL
}
