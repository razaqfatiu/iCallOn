import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Auth from './Components/auth';

class Auth extends Component {
  render() {
    return (
      <div>
      <form method="post">
      <label htmlFor="username"> What's your Username</label>
      <input type="text" id="username"/>
      <input type="button" id='btnlogin' value="Enter"/>
      </form>
      </div>
    );
  }
}

export default Auth;
