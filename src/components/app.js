import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
//
// import Welcome from './welcome';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
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
          callback={(response) => {
            if (response.status !== 'not_authorized' && response.status !== 'unknown') {
              document.getElementById('login').innerHTML = `Welcome, ${response.name}! `;
              document.getElementById('login').innerHTML += `Your email is <span class="email">${response.email}</span>.`;
              document.getElementById('login').innerHTML += `<img src="${response.picture.data.url}"/>`;
              document.getElementById('login').style = 'display: block';
            } else {
              document.getElementById('login').style = 'display: block';
            }
          }}
        />
      </div>
    );
  }
}

export default App;
