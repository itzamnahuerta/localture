import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import UserProfile from '../UserProfile/UserProfile'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Switch> 
            <Route exact path="/userprofile" 
              component={UserProfile}
            />
            <Route exact path="/map"
              component={Map}
            />
            <Dashboard />
        </Switch> 
      </div>
    )
  }
}
