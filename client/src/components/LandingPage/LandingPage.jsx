import React, { Component } from 'react'

import LoginForm from '../LoginForm/LoginForm'
import SignupForm from '../SignupForm/SignupForm';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1> landing page </h1>
        <LoginForm/>
        <SignupForm /> 
      </div>
    )
  }
}
