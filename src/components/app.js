import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


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

    this.onFacebookLogin = this.onFacebookLogin.bind(this);
    this.onGoogleLogin = this.onGoogleLogin.bind(this);
  }

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


  onFacebookLogin(response) {
    if (response.status !== 'not_authorized' && response.status !== 'unknown') {
      document.getElementById('facebook').innerHTML = `Welcome, ${response.name}! `;
      document.getElementById('facebook').innerHTML += `<img src="${response.picture.data.url}"/>`;
      document.getElementById('facebook').style = 'display: block';
    } else {
      document.getElementById('facebook').style = 'display: block';
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
        <GoogleLogin
          clientId="417630909446-4sn415rk8lvbhjtlghssq4p2mlv1ud4v.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          callback={this.onGoogleLogin}
        />
     );
    }
  }

  render() {
    // Add in FacebookLogin, GoogleLogin and FirebaseApp
    return (
      <div id="login">
        <div id="facebook">
          <FacebookLogin
            appId="149178142180807"
            autoLoad
            fields="name,email,picture.type(large)"
            callback={this.onFacebookLogin}
          />
        </div>
        <div id="google">
          {this.renderGoogle()}
        </div>
      </div>
    );
  }
}

export default App;
