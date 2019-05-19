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

  handleFormChange = () => {
    this.setState({
      formBtn: !this.state.formBtn
    });
  }

  showLoginForm = () => {
    return (
      <LoginForm
        authenticated={this.props.authenticated}
        handleLoginFormChange={this.props.handleLoginFormChange}
        handleLogin={this.props.handleLogin}
        username={this.props.username}
        password={this.props.password}
        handleFormChange={this.handleFormChange}
      />
    );
  }

  showRegisterForm = () => {
    return (

      <SignupForm handleFormChange={this.handleFormChange}/>
    );
  }


  render() {
    const switchForm = this.state.formBtn ? this.showLoginForm() : this.showRegisterForm()

    return (
      <div>
        <h1> landing page </h1>
        {switchForm}
      </div>
    )
  }
}
