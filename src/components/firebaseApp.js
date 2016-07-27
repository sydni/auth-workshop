import React, { Component } from 'react';
import * as firebaseui from '../firebaseui';

class FirebaseApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      photo: '',
      signedIn: false,
    };
    this.onSignIn = this.onSignIn.bind(this);
  }
  componentDidMount() {
    firebaseui.start(this.onSignIn);
  }
  onSignIn(user) {
    if (user) {
      this.setState({
        name: user.displayName,
        email: user.email,
        photo: user.photoUrl,
      });
    }
  }

  render() {
    return (
      <div id="firebase">
        <div id="firebaseui-auth-container" />
        <div id="firebase-info">
          Name: {this.state.name} <br />
          Email: {this.state.email} <br />
          Photo: <img src={this.state.photo} alt="none available" />
        </div>
      </div>
    );
  }
}

export default FirebaseApp;
