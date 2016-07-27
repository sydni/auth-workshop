import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import FirebaseApp from './firebaseApp';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      google: false,
      googleName: '',
      googleEmail: '',
      googleImage: '',
    };
    this.onGoogleLogin = this.onGoogleLogin.bind(this);
    this.onFacebookLogin = this.onFacebookLogin.bind(this);
    this.renderGoogle = this.renderGoogle.bind(this);
  }

  onFacebookLogin(response) {
    if (response.status !== 'not_authorized' && response.status !== 'unknown') {
      console.log(response);
      document.getElementById('facebook').innerHTML = `Welcome, ${response.name}! `;
      document.getElementById('facebook').innerHTML += `Your email is <span class="email">${response.email}</span>.`;
      document.getElementById('facebook').innerHTML += `<img src="${response.picture.data.url}"/>`;
      document.getElementById('facebook').style = 'display: block';
    } else {
      document.getElementById('facebook').style = 'display: block';
    }
  }

  // Write a Google callback function here
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
      if (this.state.googleImage === '') {
        this.state.googleImage = '/imgs/defaultProPic.jpg';
      }
    }
  }

  renderGoogle() {
    if (this.state.google) {
      return (
        <div>
          <ul>
            <li>Thanks for logging in! </li>
            <li>Your Name: {this.state.googleName}</li>
            <li>Your Email: {this.state.googleEmail}</li>
            <li>Your Photo: <img src={this.state.googleImage} alt="N/A" /></li>
          </ul>
        </div>
      );
    } else {
      return (
        <div />
      );
    }
  }

  render() {
    return (
      <div id="login">
        <div id="facebook">
          <FacebookLogin
            appId="1219080648156282"
            autoLoad
            scope="user_birthday"
            fields="name,email,picture.type(large)"
            callback={this.onFacebookLogin}
          />
        </div>
        <div id="google">
          <GoogleLogin
            clientId="63478560666-m1i4mi095m2ijn3mattc3ht3rncrmr3j.apps.googleusercontent.com"
            buttonText="LOGIN WITH GOOGLE"
            callback={this.onGoogleLogin}
          />
          {this.renderGoogle()}
        </div>
        <FirebaseApp />
      </div>
    );
  }
}

export default App;
