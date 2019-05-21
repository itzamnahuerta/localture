import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';



export default class LandingPageForm extends Component {
    constructor() {
        super();
        this.state = {
          isSignup: false
        }
    }
    handleSubmitForm = (e) => {
      e.preventDefault();
      this.props.handleLogin();
    }


  render() {
    if(this.props.authenticated){
      return <Redirect to='/user' />
      
    }
    const {username, password} = this.props;

    return (
      <div className="login-form form-layout">
        <form> 
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


        <div className="sign-up-link" onClick={this.props.formToggle}> Sign up for Localture </div>

        {/* <Link to='/user'> */}
          <button 
            type="submit" 
            className="log-in-btn"
            onClick={this.handleSubmitForm}> 
             Login  
          </button>
        {/* </Link> */}

        </form>

      </div>
    )
  }
}


