import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import SignUpForm from '../SignupForm/SignupForm'
// import { LandingPage } from "../LandingPage/LandingPage";


export default class LandingPageForm extends Component {
    constructor() {
        super();
        this.state = {
            error:false,
            isAuthenticated: false,
            username: '',
            password: ''
        }
    }
    

  render() {
    const {username, password} = this.state;

    return (
      <div className="login-form">
        <h3> Sign In </h3>
        <form onChange={this.props.handleLoginFormChange} > 
        <input
          className="login-input" 
          type="text"
          name="username"
          value={username}
          placeholder="Username"
        />
        <input 
          className="login-input"
          type="text"
          name="password"
          value={password}
          placeholder="Password"
        />
        <button type="submit" className="sign-in-btn"> Login  </button>
        </form>

      </div>
    )
  }
}
