import React, { Component } from 'react';
import ProfileInterests from '../ProfileInterests/ProfileInterests'
import {Redirect, Link} from 'react-router-dom';
import Active from '../../assets/active.png';
import Entertainment from '../../assets/entertainment.png';
import Food from '../../assets/food.png';
import Music from '../../assets/music.png';

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
                    <div>
                        <h1>My Profile</h1>
                    </div>

                    <div>
                        <div>IMAGE</div>
                        <div>HOME AREA</div>
                    </div>

                    <div>
                        <h1>Interests</h1>
                    </div>
                    <div>Music</div>

                    
                    <div>
                        {/* .map through instrests and reder one for each */}
                        <ProfileInterests 
                            name='Music'
                            image={<img src={Music} alt='' />}
                        />
                        <ProfileInterests 
                            name='Food'
                            image={<img src={Food} alt='' />}
                        />
                        <ProfileInterests 
                            name='Entertainment'
                            image={<img src={Entertainment} alt='' />}
                        />
                        <ProfileInterests 
                            name='Active'
                            image={<img src={Active} alt='' />}
                        />
                    </div>
                </div>
            )
        }
}

export default UserProfile;