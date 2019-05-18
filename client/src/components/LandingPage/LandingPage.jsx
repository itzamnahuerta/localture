import React, { Component } from 'react'

import LoginForm from '../LoginForm/LoginForm'
import SignupForm from '../SignupForm/SignupForm';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1> landing page </h1>
        <LoginForm
          authenticated={this.props.authenticated}
          handleLoginFormChange={this.props.handleLoginFormChange}
          handleLogin={this.props.handleLogin}
          username={this.props.username}
          password={this.props.password}
        />
        {/* <SignupForm />  */}
      </div>
    )
  }
}
