import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import SignUpForm from '../SignupForm/SignupForm'
// import { LandingPage } from "../LandingPage/LandingPage";


export default class LandingPageForm extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    handleSubmitForm = (e) => {
      e.preventDefault();
      this.props.handleLogin();
    }

  render() {
    const {username, password} = this.props;

    return (
      <div className="login-form form-layout">
        <form 
        onSubmit={this.handleSubmitForm} > 
        <label className="form-title"> Log in </label>
        <input
          className="login-input" 
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={this.props.handleLoginFormChange}
        />
        <label> Password </label>
        <input 
          className="login-input"
          type="text"
          name="password"
          value={password}
          placeholder="Password"
          onChange={this.props.handleLoginFormChange}
        />
        <button type="submit" className="log-in-btn"> Login  </button>
        </form>

      </div>
    )
  }
}
