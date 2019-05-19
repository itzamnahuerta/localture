import React, { Component } from 'react'

export default class SignupForm extends Component {
  render() {
    return (
      <div className="sign-up-form form-layout">
        <form >
            <label className="form-title"> Sign Up </label>

            <label> Username </label>  
            <input
                type="text"
                name="username"
            />
            <label> Email </label>    
            <input
                type="text"
                name="email"
            /> 
            <label> Password </label>
            <input
                type="text"
                name="password"
            />
            <label> First Name </label>
            <input
                type="text"
                name="first-name"
            />
            <label> Last Name </label>
            <input
                type="text"
                name="last-name"
            />
            <label> City </label>
            <input
                type="text"
                name="city"

            />
            <label> Country </label>
            <input
                type="text"
                name="country"
            />
            <button type="submit" className="sign-up-btn"> Get started </button>
            <a className="sign-up-link" onClick={this.props.handleFormChange}> Login Instead </a>


        </form>
      </div>
    )
  }
}
