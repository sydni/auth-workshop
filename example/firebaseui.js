import firebase from 'firebase';

// Initialize Firebase with its configs here
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBC5F9D7WEXriPcbek-c9ly31DURiTNDCs",
  authDomain: "authentication-workshop.firebaseapp.com",
  databaseURL: "https://authentication-workshop.firebaseio.com",
  storageBucket: "authentication-workshop.appspot.com",
};
firebase.initializeApp(config);

const ui = new firebaseui.auth.AuthUI(firebase.auth());


export function start(callback) {
  // FirebaseUI configs here here
  // FirebaseUI config.
  var uiConfig = {
  //  'signInSuccessUrl': '', // Provides a redirect URL after signing in
    'signInOptions': [
      // Leave the lines as is for the providers you want to offer your users.
      // Make sure to enable them on your console
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    'callbacks': {
      'signInSuccess': (currentUser) => {
        callback(currentUser);
        return false;
      },
    },
  };

  // Put ui.start... here:
  // The start method will wait until the DOM is loaded.
// Acts on the <div id="firebaseui-auth-container" /> tag
  ui.start('#firebaseui-auth-container', uiConfig);
}

export function getUser(callback) {
  firebase.auth().onAuthStateChanged((user) => {
    callback(user);
  });
}
