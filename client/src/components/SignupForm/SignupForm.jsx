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
                onChange={this.props.handleLoginFormChange}
            />
            <label> Email </label>    
            <input
                type="text"
                name="email"
                onChange={this.props.handleLoginFormChange}
            /> 
            <label> Password </label>
            <input
                type="text"
                name="password"
                onChange={this.props.handleLoginFormChange}
            />
            <label> First Name </label>
            <input
                type="text"
                name="first-name"
                onChange={this.props.handleLoginFormChange}
            />
            <label> Last Name </label>
            <input
                type="text"
                name="last-name"
                onChange={this.props.handleLoginFormChange}
            />
            <label> City </label>
            <input
                type="text"
                name="city"
                onChange={this.props.handleLoginFormChange}

            />
            <label> Country </label>
            <input
                type="text"
                name="country"
                onChange={this.props.handleLoginFormChange}
            />
            <button type="submit" className="sign-up-btn"> Get started </button>
            <div className="sign-up-link" onClick={this.props.formToggle}> Login Instead </div>


        </form>
      </div>
    )
  }
}
