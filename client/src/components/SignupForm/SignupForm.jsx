import React, { Component } from 'react'

export default class SignupForm extends Component {
  render() {
    return (
      <div className="sign-up-form">
        <form>
            <label> Username </label>  
            <input
                type="text"
                name="name"
                placeholder="Username"
            />
            <label> Email </label>    
            <input
                type="text"
                name="name"
                placeholder="Email"
            /> 
            <label> Password </label>
            <input
                type="text"
                name="name"
                placeholder="Password"
            />
            <label> First Name </label>
            <input
                type="text"
                name="name"
                placeholder="First Name"
            />
            <label> Last Name </label>
            <input
                type="text"
                name="name"
                placeholder="Last Name"
            />
            <label> City </label>
            <input
                type="text"
                name="name"
                placeholder="City"
            />
            <label> Country </label>
            <input
                type="text"
                name="name"
                placeholder="Country"
            />
            
            

        </form>
      </div>
    )
  }
}
