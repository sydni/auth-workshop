import firebase from 'firebase';

// Initialize Firebase with its configs here

// Initialize the FirebaseUI Widget using Firebase here

export function start(callback) {
  // FirebaseUI configs here here

  // Put ui.start... here:

}

export function getUser(callback) {
  firebase.auth().onAuthStateChanged((user) => {
    callback(user);
  });
}
