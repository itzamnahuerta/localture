import React, { Component } from 'react';
import ProfileInterests from '../ProfileInterests/ProfileInterests'
import {Redirect, Link} from 'react-router-dom';
import Entertainment from '../../assets/entertainment.png';
import Food from '../../assets/food.png';
import Music from '../../assets/music.png';
import Active from '../../assets/active.png';
import Interests from '../Interests/Interests'



class UserProfile extends Component {
    constructor(){
        super();
        this.state= {
            music: ["Hip Hop", "Indie", "Rap", "Rock", "R&B", "Pop", "Electronic", "Latin", "Folk", "Classical", "Jazz", "Reggae", "Desi", "Soul", "Bachata", "Techno"],
         
            entertainment: ["Musicals", "Live Music", "Comedy", "Jazz Clubs", "Burlesque", "Circus", "Plays", "Festivals", "Parties", "Clubs", "Events", "Theatre","Puppetry", "Parades", "NakedShakespeare"],

            active: ["Sailing", "Biking", "Hiking", "Roller Derby", "Picnic", "Parks", "Gyms", "Sport Clubs", "Kayaking", "Camping", "Ziplining", "Spelunking", "Paddleboarding", "Surfing", "Gardens", "Tennis", "Rooftop Drinking", "Rock Climbing", "Segway Tours", "Sailing", "Biking"],

            food: ["Mexican", "Turkish", "French", "Italian", "Vietnamese", "Japanese", "Korean", "Ethiopian", "Mediterranean", "Vegan", "American", "Southwestern", "Southern", "Indian", "English", "Thai", "Japanese", "Cuban", "Burmese", "Spanish", "Chinese", "Irish", "Swedish", "Tapas", "Hungarian"],
            editInterests: false,
            selectedInterest: []
        }
    }
    handleEditInterests = (e) => {
        e.preventDefault();
        this.setState({
            editInterests: true,
            selectedInterest: e.target.id
        })
    }

    listInterests = () => {
        console.log('called listInterests')
        if(this.state.selectedInterest == "Music"){
            console.log(this.state.music);
            return this.state.music.map((m, i) => {
                console.log('mapping', m)
                return <li key={i}>{m}</li>
                })
        }
        if(this.state.selectedInterest == "Entertainment"){
            console.log(this.state.entertainment);
            return this.state.entertainment.map((m, i) => {
                console.log('mapping', m)
                return <li key={i}>{m}</li>
                })
        }
        if(this.state.selectedInterest == "Active"){
            console.log(this.state.active);
            return this.state.active.map((m, i) => {
                console.log('mapping', m)
                return <li key={i}>{m}</li>
                })
        }
        if(this.state.selectedInterest == "Food"){
            console.log(this.state.food);
            return this.state.food.map((m, i) => {
                console.log('mapping', m)
                return <li key={i}>{m}</li>
                })
        }
    }

    leaveEditInterests = (e) => {
        e.preventDefault();
        this.setState({editInterests: false})
    }


    render() {
        if(!this.props.authenticated){
            return <Redirect to='/' />
        }
        if(this.props.authenticated && this.state.editInterests){
            return (
                <div>
                    <button onClick={this.leaveEditInterests}>Back</button>
                    <h1>{this.state.selectedInterest}</h1>
                    <ul>
                        {this.listInterests()}
                    </ul>
                </div>
            )
            // return <h1>Working</h1>
        }
        else if(this.props.authenticated && !this.state.editInterests){
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
                            handleEditInterests={this.handleEditInterests}
                            subcat={this.state.music}
                            image={<img src={Music} alt='' />}
                        />
                        <ProfileInterests 
                            name='Food'
                            handleEditInterests={this.handleEditInterests}
                            subcat={this.state.food}
                            image={<img src={Food} alt='' />}
                        />
                        <ProfileInterests 
                            name='Entertainment'
                            handleEditInterests={this.handleEditInterests}
                            subcat={this.state.entertainment}
                            image={<img src={Entertainment} alt='' />}
                        />
                        <ProfileInterests 
                            name='Active'
                            handleEditInterests={this.handleEditInterests}
                            subcat={this.state.active}
                            image={<img src={Active} alt='' />}
                        />
                    </div>
                </div>
            )
       
        }

    }
}

export default UserProfile;