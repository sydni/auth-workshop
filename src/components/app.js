import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import FirebaseApp from './firebaseApp';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.onGoogleLogin = this.onGoogleLogin.bind(this);
    this.onFacebookLogin = this.onFacebookLogin.bind(this);
  }

  onFacebookLogin(response) {
    if (response.status !== 'not_authorized' && response.status !== 'unknown') {
      document.getElementById('login').innerHTML = `Welcome, ${response.name}! `;
      document.getElementById('login').innerHTML += `Your email is <span class="email">${response.email}</span>.`;
      document.getElementById('login').innerHTML += `<img src="${response.picture.data.url}"/>`;
      document.getElementById('login').style = 'display: block';
    } else {
      document.getElementById('login').style = 'display: block';
    }
  }

  // What happens after someone logs in
  onGoogleLogin(response) {
    console.log(response);
  }

  render() {
    console.log('Printing!!');
    return (
      <div id="login">
        <FacebookLogin
          appId="1219080648156282"
          autoLoad
          scope="user_birthday"
          fields="name,email,picture.type(large)"
          callback={this.onFacebookLogin}
        />
        <GoogleLogin
          clientId="63478560666-m1i4mi095m2ijn3mattc3ht3rncrmr3j.apps.googleusercontent.com"
          buttonText="Login"
          callback={this.onGoogleLogin}
        />
        <FirebaseApp />
      </div>
    );
  }
}

export default App;
