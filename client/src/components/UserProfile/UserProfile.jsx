import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm'
import LandingPage from '../LandingPage/LandingPage'
import {Redirect, Link} from 'react-router-dom';

class UserProfile extends Component {
    render() {
        if(!this.props.authenticated){
            return <Redirect to='/' />
        }
            return(
                <div>
                      
        <Link to='/othersprofile'>SOMEONE ELSEEEEEE</Link>
        <Link to='/travelers_near_you'>Travelers Near You</Link>
        <Link to='/interests'>Interests</Link>
                    <div>ALL THIS SSTUFF</div>
                    <div></div>
                    <div></div>
                </div>
            )
        }
}

export default UserProfile;