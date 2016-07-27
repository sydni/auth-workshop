# Welcome to our Authentication workshop!
![soexcited](https://admin.mashable.com/wp-content//uploads/2013/07/Friends1.gif)

Today we are going to implement a webpage that a user has to sign into to access. Like a lot of webpages, we can use google or facebook accounts for authentication. Let's start with facebook.

![officepic](http://wersm.com/wp-content/uploads/2015/10/wersm-john-office-costume.jpg)

## Facebook authentication

Steps...etc

If we need to npm install we should use this meme

![boxchocolates](https://cdn.meme.am/instances/63034960.jpg)

For apis:
![apis](https://cdn.meme.am/instances/57307523.jpg)

Ok lets switch gears and add a google login for kicks as well!

![google](http://weknowmemes.com/wp-content/uploads/2013/07/what-if-one-day-google-was-deleted.png)

## Google authentication:

### Step one: Get the Client ID

Ok so before we start, we need to go create a Google Developers Console project and client ID.

_Instructions gathered from (https://developers.google.com/identity/sign-in/web/devconsole-project) and (https://developers.google.com/identity/sign-in/web/sign-in)._

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

![yay](https://m.popkey.co/9b305c/y6wJ7.gif)

### Step two: Initialize the api

Now go to your index.html file and make sure you have the script tag to include the google api library.

```
<script src="https://apis.google.com/js/platform.js" async defer></script>
```

Now use your Client ID that you copied from earlier and add it in a meta tag to allow the api to work!

```
<meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com">
```

## Step three: Add in buttons and signin() functions


Now we are initialized, and need to make a button to allow sign in! You can personalize your own or use the google default pre-styled one here.
```
<div class="g-signin2" data-onsuccess="onSignIn"></div>
```

Now you can access the user's profile information when they try to log in with google. Add this excerpt to your scripts tag.

```
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}
```

To allow a user to sign out, you need to add a sign out button and corresponding sign out javascript function.

```
<a href="#" onclick="signOut();">Sign out</a>
<script>
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
</script>
```

Now we have a functioning login/logout feature to our react app! WOO!

![woo](https://m.popkey.co/9d0c9e/K01R6.gif)

Now we want to make our app do something with this login info!

blah

Sweet we are done!

![done](https://az616578.vo.msecnd.net/files/2016/04/27/635973905059782999-786745112_marry%20poppins.gif)
