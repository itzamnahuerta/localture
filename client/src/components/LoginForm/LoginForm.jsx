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

    handleFormChange = (e) => {
        const fieldName = e.target.name;
        const value = e.target.value;
        this.setState({
            [fieldName] : value,
            error: false
        })
    }
    

  render() {
    const {username, password} = this.state;

    return (
      <div className="login-form form-layout" >
    
        <form onChange={this.handleFormChange} > 
        <label className="form-title"> Login </label>
        <label> Username </label>
        <input
          className="login-input" 
          type="text"
          name="username"
          value={username}
        />
        <label> Email </label>
        <input 
          className="login-input"
          type="text"
          name="password"
          value={password}
        />
        <button type="submit" className="log-in-btn"> Login  </button>
        </form>

      </div>
    )
  }
}
