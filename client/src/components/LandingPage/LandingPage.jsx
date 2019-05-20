import React, { Component } from 'react'

import LoginForm from '../LoginForm/LoginForm'
import SignupForm from '../SignupForm/SignupForm';

export default class LandingPage extends Component {
  constructor() {
    super()

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
        formToggle={this.formToggle}
        handleLoginFormChange={this.props.handleLoginFormChange}
      />
    );
  }


  render() {
    const switchForm = this.state.formBtn ? this.showLoginForm() : this.showRegisterForm()

    return (
      <div>
        {switchForm}
      </div>
    )
  }
}
