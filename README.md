
# Firebase Authentication
Firebase provides users with an easy to use, pre-styled auth solution that also allows developers to manage their users. This portion of the workshop will show you how to incorporate firebase authentication in a React component.
We'll be working with firebase in a `firebaseui.js` file. Functions from this file are exported and used in the React component file `firebaseApp.js` that is called in the `app.js` file.
Information for this workshop is based off the Firebase's [documentation](https://firebase.google.com/docs/auth/)

## Initializing Firebase and FirebaseUI
Start by creating a firebase project like you did in HW3 in the [firebase console](https://console.developers.google.com/apis).

Don't forget to install firebase:
```
npm install --save firebase
```

To use firebase for authentication you need to first initialize firebase and then initialize FirebaseUI.

Grab the configs and `initializeApp` line and put them in the top of the `firebaseui.js` file. Like in HW3 this file will contain our functions that access firebase.

Initialize FirebaseUI by placing this line in `firebase.js`:
```
var ui = new firebaseui.auth.AuthUI(firebase.auth());
```
And then add the following two lines to your `<head>` in `index.html`:
```
<script src="https://www.gstatic.com/firebasejs/ui/live/0.4/firebase-ui-auth.js"></script>
<link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/live/0.4/firebase-ui-auth.css" />
```
This will make your sign-in buttons look sweet.

## Set up Firebase Authnetication

Let's set up the authentication in the console next! Go back to your [firebase console](https://console.developers.google.com/apis) and click on the Authentication tab.
![Authentication](imgs/Auth.png)

The click on Sign-In Method and enable the one's you feel appropriate. Since Firebase is a Google product, enabling users to sign on via Google may be helpful.  

![Sign-In](imgs/SignInMethod.png)

## Prompt for Sign In

Scan through `firebaseui.js`. In this particular project the start function prompts the widget to ask the user to sign in and passes along user information to a callback function if the sign in is successful. The widget requires a number of configs as well. Adapt and insert the following code under the `start()`.
```
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
```
You can find more information about the configuration parameters [here](https://github.com/firebase/FirebaseUI-Web)

To make the sign-in widget appear place the following line after the configs:
```
// The start method will wait until the DOM is loaded.
// Acts on the <div id="firebaseui-auth-container" /> tag
ui.start('#firebaseui-auth-container', uiConfig);
```
Now when you call the start function sign-in buttons will appear and prompt the user to sign in.
Check out the `getUser` function. This retrieves a reference to the user object after a user has been authenticated to retrieve additional information about a user.

Notice how the ui.start method has a `#firebaseui-auth-container`? This indicates that the widget will appear onto something with that id such as: `<div id="firebaseui-auth-container" />`.
Place this line in `firebaseApp.js` within `return()`.

Running `npm start` should now prompt you with a fun sign-in widget and display some information about the signed in user.

NOTE: We recommend opening `localhost:8080` in an incognito window to avoid multiple signed in accounts causing problems.
