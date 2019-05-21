import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import LoginForm from '../LoginForm/LoginForm'
import SignupForm from '../SignupForm/SignupForm';
import Dashboard from '../Dashboard/Dashboard';
import UserProfile from '../UserProfile/UserProfile'

export default class LandingPage extends Component {
  constructor() {
    super();

    this.state = {
      formBtn: false
    }
  }

  formToggle = () => {
    this.setState({formBtn: !this.state.formBtn})
  }


  showLoginForm = () => {
    return (
      <LoginForm
        authenticated={this.props.authenticated}
        handleLoginFormChange={this.props.handleLoginFormChange}
        handleLogin={this.props.handleLogin}
        username={this.props.username}
        password={this.props.password}
        formToggle={this.formToggle}
      />
    );
  }

  showRegisterForm = () => {
    return (

      <SignupForm 
        handleSignUp={this.props.handleSignUp}
        formToggle={this.formToggle}
        handleLoginFormChange={this.props.handleLoginFormChange}
      />
    );
  }


  render() {
    const switchForm = this.state.formBtn ? this.showLoginForm() : this.showRegisterForm()
    if(this.props.authenticated){
      return(
        <Redirect to='/user' />
        //Try redirect here?????
      )
    }
    else if(!this.props.authenticated){
      return (
        <div>
          {switchForm}
        </div>
      )
    }
  }
}

