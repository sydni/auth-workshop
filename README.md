# Welcome to our Social Integration + Authentication workshop!
![soexcited](https://admin.mashable.com/wp-content//uploads/2013/07/Friends1.gif)

Today we are going to implement a webpage that a user has to sign into to access. Like a lot of webpages, we can use Google or Facebook accounts for authentication, sometimes without putting in your password. WOWIE! Below we have workshops for Facebook Login, Google Login and Firebase Authentication.

# Facebook

We'll be showing you guys how to add a Facebook login feature using a pretty simple node module...BUT

## First things first

You need to fork and clone this repo duhhhhh! Go ahead, you got this.

![yougotthis](https://m.popkey.co/82d7a9/Y003o_s-200x150.gif?c=popkey-web&p=popkey&i=mondaymotivation-reactions&l=search&f=.gif)

## Facebook Authentication

![officepic](http://wersm.com/wp-content/uploads/2015/10/wersm-john-office-costume.jpg)

Well whattya know, there's a handy dandy npm module for implementing the facebook login with react. Let's install it! (Note: do we need to do npm install?)

```
$ npm install react react-dom react-facebook-login —save
```

![boxchocolates](https://cdn.meme.am/instances/63034960.jpg)

Ok ok I'll take a break from the memes for a bit while we get this set up :)

Let’s start with our app file. Currently you can see we have a basic structure there.

```
import React, { Component } from 'react';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }


  render() {
    return (
      <div id="login">
      </div>
    );
  }
}

export default App;

```

Now we need to import our react Facebook login at the top of our file.

```
import FacebookLogin from 'react-facebook-login';
```

What are we going to render? A login button right? Ok so here is the basic structure of the Facebook login element based off of the NPM documentation for that module. You want to put this inside the current login div.

```
  <FacebookLogin
    appId=“yourappid"
    autoLoad
    fields="name,email,picture"
    callback={someCallback}
/>
```

So it looks like we need an App ID.

Head over here to get your ID. https://developers.facebook.com/apps/

Register as a developer, it only takes a second :)

![devpic](https://media.giphy.com/media/xTiQysAAe1IB2jaV56/giphy.gif)

Make a new web app with the name of your choice and grab that App ID

Now add it into the code where we specified. What else do we need to do? We need to define our callback function, or what the website will return after the user is logged in. Facebook’s api is nice because it allows you to access some user information, so let’s use that to welcome the user when they log in!

First step is to name our login function. You can call it whatever you want, but we gave it the creative title onFacebookLogin. So inside the callback curly braces add the function name.

```
callback={this.onFacebookLogin}
```

Then, bind the login to this in your constructor (you should know how to do this by now) and create your function.

```
onFacebookLogin(response) {
  if (response.status !== ‘not_authorized’ && response.status !== ‘unknown’){

  } else {

  }
}
```

Here we already have a nice if-statement that checks whether the login was successful or not yay!

Now inside we want to greet the user. So we want to add to our html when logged in. Here’s an example of what you could say!

```
document.getElementById('facebook').innerHTML = `Welcome, ${response.name}! `;
document.getElementById('facebook').innerHTML += `<img src="${response.picture.data.url}"/>`;
document.getElementById('facebook').style = 'display: block’;
```

And if they weren’t logged in you would just keep the html the same, maybe keeping it as a block??? AKA put this in the else statement.

```
document.getElementById('facebook').style = 'display: block';
```

The picture seems kinda small too so let’s change the fields attribute in our Facebook element to:

```
fields="name,email,picture.type(large)”
```

There's one last thing we need to do on Facebook before we can test our new page.

Head back over to https://developers.facebook.com/apps/ and click on the app you made

In settings, click add platform 

![platform](imgs/addplatform.png)

and select website. Then, set the Site URL field to http://localhost/

![urlfield](imgs/addlocal.png)

Lastly, we need to add localhost to the main settings section (towards the top of this page)

![localhostpic](imgs/addlocal2.png)


There we go! Now we told facebook to allow the app to run on our localhost!

![victory](https://media.giphy.com/media/lnlAifQdenMxW/giphy.gif)

We are ready to test it out! Gotta npm start it up!

```
npm start
```


Go to your localhost and try logging it and see what happens. Make sure to ask questions if you are having trouble, or retrace your steps in the tutorial.

Ok lets switch gears and add a google login for kicks as well!

# Google Authentication:

![google](http://weknowmemes.com/wp-content/uploads/2013/07/what-if-one-day-google-was-deleted.png)

Just something to think about. :)

## Step one: Get the Client ID

We'll be being implementing a Google log-in feature as React component using a node-modeule.
But so before we start, we need to go create a Google Developers Console project and client ID.

First go to:
[google's API console](https://console.developers.google.com/project/_/apiui/apis/library)

and create a new project.

In the sidebar under "API Manager", select Credentials, then select the OAuth consent screen tab.
Choose an Email Address, specify a Product Name, and press Save.

In the Credentials tab, select the New credentials drop-down list, and choose OAuth client ID.

Under Application type, select Web application.
Register the origins from which your app is allowed to access the Google APIs, as follows. An origin is a unique combination of protocol, hostname, and port.
In the Authorized JavaScript origins field, enter the origin for your app. You can enter multiple origins to allow for your app to run on different protocols, domains, or subdomains. You cannot use wildcards. In the example below, the second URL could be a production URL.

http://localhost:8080
https://myproductionurl.example.com

The Authorized redirect URI field does not require a value. Redirect URIs are not used with JavaScript APIs.

Press the Create button.

From the resulting OAuth client dialog box, copy the Client ID, you will use it soon!! The Client ID lets your app access enabled Google APIs.

![apis](https://cdn.meme.am/instances/62904902.jpg)

Ok now we can add google sign in to our website! Yay!

## Step two: An Introduction to Google API JavaScript Client Library and Installing the Node-Module

Google provides developers with a Google API JavaScript Client Library chock full of functions that provides access to a majority of Google's APIs. You can check out the reference docs [here](https://developers.google.com/api-client-library/) if you're interested in. NOTE: to use methods from the client library in a React component you need to add the prefix `window.gapi...`.

Like Facebook Login we'll being making things a lot easier and streamline accessing the client with a node-module: react-google-login. You can find more information about it [here](https://github.com/anthonyjgrove/react-google-login). Install it with npm like you normally do:

```
npm install --save react-google-login
```

This module provides the code for a google login React component, SWEET!
We'll be adding the component into App so don't forget to import it:
```
import GoogleLogin from 'react-google-login';
```

Great Job!

![great job](https://media.giphy.com/media/xHMIDAy1qkzNS/giphy.gif)

## Step three: Add In Callback Function and Sign-In Button

The react-google-login module takes in a callback function as a prop and returns a GoogUser object to that callback. Write a function that takes in a response. In this case we called the function `onGoogleLogin(response)` but you can call it whatever you like. And don't forget to `bind(this)` the function in the constructor.

In case this is confusing we left a line in the code for you to add your callback function:
```
\\ Write a Google callback function here
```

After we set up the callback function, we can add in the component in render() like we normally do in React:
```
<GoogleLogin
  clientId="YOUR-CLIENT-ID"
  buttonText="BUTTON-TEXT"
  callback={this.onGoogleLogin}
/>
```
For styling purposes put it component within the `<div id="google">` tags.

Now we have a functioning login/logout feature to our react app! WOO!

![woo](https://m.popkey.co/9d0c9e/K01R6.gif)

Now we want to make our app do something with this login info!

The response the callback function receives is a GoogUser object. You can read through the documentation on that [here](https://developers.google.com/api-client-library/javascript/reference/referencedocs#users). We're going to grab the profile of the user with the function: `response.getBasicProfile()`. From the BasicProfile object we can get name, email, and a profile picture using `getName()`, `getEmail()`, and `getImageUrl()`.

To switch things up, we decided to use the App's state with google authentication and rendering instead of using the documentGetID functions. You could still do it the other way, but we wanted to show a couple different directions you could take.

So we want to update the component by calling `this.setState`. Here's how we did it:

```
// What happens after someone logs in
onGoogleLogin(response) {
  if (response) {
    const user = response.getBasicProfile();
    this.setState({
      google: true,
      googleName: user.getName(),
      googleEmail: user.getEmail(),
      googleImage: user.getImageUrl(),
    });
  }
}
```
The sample for this workshop has a `renderGoogle()` function that displays user information if a Google User is signed in though the log in button.

Test and see how it works now! Aren't you proud?

![yay](https://m.popkey.co/9b305c/y6wJ7.gif)

Cool, now that we have our google and facebook logins, let's explore authentication with firebase and our react app.

# Firebase Authentication

For this portion of our workshop we're going to make FirebaseApp that prompts the user to login and then displays their information afterwards. We're going show all our work in a `FirebaseApp` component. The outline of this component is in `firebaseApp.js`. To make it show up add the component in `app.js` with `<FirebaseApp />`

![fire](https://media.giphy.com/media/nrXif9YExO9EI/giphy.gif)

Firebase provides users with an pre-styled auth solution that also allows developers to manage their users. This portion of the workshop will show you how to incorporate firebase authentication in a React component.
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

Initialize FirebaseUI by placing this line in `firebaseui.js`:
```
var ui = new firebaseui.auth.AuthUI(firebase.auth());
```
And then add the following two lines to your `<head>` in `index.html`:
```
<script src="https://www.gstatic.com/firebasejs/ui/live/0.4/firebase-ui-auth.js"></script>
<link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/live/0.4/firebase-ui-auth.css" />
```
This will make your sign-in buttons look sweet.

![sweet](https://media.giphy.com/media/4Z3DdOZRTcXPa/giphy.gif)

## Set up Firebase Authentication

Let's set up the authentication in the console next! Go back to your [firebase console](https://console.developers.google.com/apis) and click on the Authentication tab.
![Authentication](imgs/Auth.png)

The click on Sign-In Method and enable the one's you feel appropriate. Since Firebase is a Google product, enabling users to sign on via Google may be helpful.  

![Sign-In](imgs/SignInMethod.png)

## Prompt for Sign In

Scan through `firebaseui.js`. In this particular project the start function prompts the widget to ask the user to sign in and passes along user information to a callback function if the sign in is successful. In this project the callback function is `onSignIn` in the `firebaseApp.js` file. It takes the user object firebase returns grabs name, email and profile picture from the user.

```
onSignIn(user) {
  if (user) {
    this.setState({
      name: user.displayName,
      email: user.email,
      photo: user.photoUrl,
    });
  }
}
```

The widget requires a number of configs as well. Adapt and insert the following code under the `start(callback)` function.
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

![firebase auth](imgs/FirebaseAuth.png)

NOTE: We recommend opening `localhost:8080` in an incognito window to avoid multiple signed in accounts causing problems.

### You are done! Woo! We hope you enjoyed this tutorial on authentication.

![done](https://az616578.vo.msecnd.net/files/2016/04/27/635973905059782999-786745112_marry%20poppins.gif)
