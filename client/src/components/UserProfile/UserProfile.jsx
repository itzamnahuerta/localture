import React, { Component } from 'react';
import ProfileInterests from '../ProfileInterests/ProfileInterests'
import {Redirect, Link} from 'react-router-dom';
import Entertainment from '../../assets/entertainment.png';
import Food from '../../assets/food.png';
import Music from '../../assets/music.png';
import Active from '../../assets/active.png';

import ProfileImage from '../../media/profile_photo.png'


class UserProfile extends Component {
    constructor(){
        super();
        this.state= {
            music: ["Hip Hop", "Indie", "Rap", "Rock", "R&B", "Pop", "Electronic", "Latin", "Folk", "Classical", "Jazz", "Reggae", "Desi", "Soul", "Bachata", "Techno"],
         
            entertainment: ["Musicals", "Live Music", "Comedy", "Jazz Clubs", "Burlesque", "Circus", "Plays", "Festivals", "Parties", "Clubs", "Events", "Theatre","Puppetry", "Parades", "NakedShakespeare"],

            active: ["Sailing", "Biking", "Hiking", "Roller Derby", "Picnic", "Parks", "Gyms", "Sport Clubs", "Kayaking", "Camping", "Ziplining", "Spelunking", "Paddleboarding", "Surfing", "Gardens", "Tennis", "Rooftop Drinking", "Rock Climbing", "Segway Tours", "Sailing", "Biking"],

            food: ["Mexican", "Turkish", "French", "Italian", "Vietnamese", "Japanese", "Korean", "Ethiopian", "Mediterranean", "Vegan", "American", "Southwestern", "Southern", "Indian", "English", "Thai", "Japanese", "Cuban", "Burmese", "Spanish", "Chinese", "Irish", "Swedish", "Tapas", "Hungarian"],
            editInterests: false,
            selectedMusic: [],
            selectedFood: [],
            selectedEntertainment: [],
            selectedActive: []
        }
    }
    addMusic = (e) => {
        let selectedMusic = this.state.selectedMusic;
        let selected = e.target.id;
        console.log(selected)
        if(selectedMusic.includes(selected)){
            let i = selectedMusic.indexOf(selected)
            console.log(i)
            selectedMusic.splice(i,1);
            console.log(selectedMusic)
            this.setState({selectedMusic})
        }
        else{
            selectedMusic.push(selected)
            this.setState({selectedMusic})
        }
    }
    addFood = (e) => {
        let selectedFood = this.state.selectedFood;
        let selected = e.target.id;
        console.log(selected)
        if(selectedFood.includes(selected)){
            let i = selectedFood.indexOf(selected)
            console.log(i)
            selectedFood.splice(i,1);
            console.log(selectedFood)
            this.setState({selectedFood})
        }
        else{
            selectedFood.push(selected)
            this.setState({selectedFood})
        }
    }
    handleEditInterests = (e) => {
        e.preventDefault();
        this.setState({
            editInterests: true,
            selectedInterest: e.target.id
        })
    }

    addActive = (e) => {
        let selectedActive = this.state.selectedActive;
        let selected = e.target.id;
        console.log(selected)
        if(selectedActive.includes(selected)){
            let i = selectedActive.indexOf(selected)
            console.log(i)
            selectedActive.splice(i,1);
            console.log(selectedActive)
            this.setState({selectedActive})
        }
        else{
            selectedActive.push(selected)
            this.setState({selectedActive})
        }
    }
    addEntertainment = (e) => {
        let selectedEntertainment = this.state.selectedEntertainment;
        let selected = e.target.id;
        console.log(selected)
        if(selectedEntertainment.includes(selected)){
            let i = selectedEntertainment.indexOf(selected)
            console.log(i)
            selectedEntertainment.splice(i,1);
            console.log(selectedEntertainment)
            this.setState({selectedEntertainment})
        }
        else{
            selectedEntertainment.push(selected)
            this.setState({selectedEntertainment})
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
                return (
                    <div className="list-items">
                        <input 
                            type='checkbox' 
                            id={m} 
                            onClick={this.addMusic}
                            />
                        <li key={i}>{m}</li>
                    </div>
                        )
                
                })
        }
        if(this.state.selectedInterest == "Entertainment"){
            console.log(this.state.entertainment);
            return this.state.entertainment.map((m, i) => {
                console.log('mapping', m)
                return (
                    <div>
                        <input 
                            type='checkbox' 
                            id={m} 
                            onClick={this.addEntertainment}
                            />
                        <li key={i}>{m}</li>
                    </div>
                )
                })
        }
        if(this.state.selectedInterest == "Active"){
            console.log(this.state.active);
            return this.state.active.map((m, i) => {
                console.log('mapping', m)
                return (
                    <div>
                        <input 
                            type='checkbox' 
                            id={m} 
                            onClick={this.addActive}
                            />
                        <li key={i}>{m}</li>
                    </div>
                )
                })
        }
        if(this.state.selectedInterest == "Food"){
            console.log(this.state.food);
            return this.state.food.map((m, i) => {
                console.log('mapping', m)
                return (
                    <div>
                        <input 
                            type='checkbox' 
                            id={m} 
                            onClick={this.addFood}
                            />
                        <li key={i}>{m}</li>
                    </div>
                )
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
                <div className="interest-boxes" >
                    <button className="back-button" onClick={this.leaveEditInterests}>Back</button>
                    <h1>{this.state.selectedInterest}</h1>
                    <ul>
                        {this.listInterests()}
                    </ul>
                </div>
            )
        }
        else if(this.props.authenticated && !this.state.editInterests){
            return(
                <div className="user-profile">

                    <div className="user-profile-heading">
                        <h2>My Profile</h2>
                    </div>
                    <div className="profile-container">
                        <img className="profile-photo" src={ProfileImage}/> 
                        <div className="profile-name"> Sample Name </div> 
                        <div className="hometown"> Brooklyn, NY </div>

                    </div>

                    <div className="user-profile-heading">
                        <h2>Interests</h2>
                    </div>
                    
                    <div className="profile-interests">
                        {/* .map through instrests and reder one for each */}
                        <ProfileInterests 
                            name='Music'
                            selectedInterest={this.state.selectedMusic}
                            handleEditInterests={this.handleEditInterests}
                            subcat={this.state.music}
                            image={<img src={Music} alt='' 
                            otherUser={this.props.otherUser}/>}
                        />
                        {this.props.otherUser}
                        <ProfileInterests 
                            name='Food'
                            selectedInterest={this.state.selectedFood}
                            handleEditInterests={this.handleEditInterests}
                            subcat={this.state.food}
                            image={<img src={Food} alt='' 
                            otherUser={this.props.otherUser}/>}
                        />
                        <ProfileInterests 
                            name='Entertainment'
                            selectedInterest={this.state.selectedEntertainment}
                            handleEditInterests={this.handleEditInterests}
                            subcat={this.state.entertainment}
                            image={<img src={Entertainment} alt='' 
                            otherUser={this.props.otherUser}/>}
                        />
                        <ProfileInterests 
                            name='Active'
                            selectedInterest={this.state.selectedActive}
                            handleEditInterests={this.handleEditInterests}
                            subcat={this.state.active}
                            image={<img src={Active} alt='' 
                            otherUser={this.props.otherUser}/>}
                        />
                    </div>
                </div>
            )
       
        }

    }
}

export default UserProfile;