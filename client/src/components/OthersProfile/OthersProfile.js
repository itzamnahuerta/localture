import React, { Component } from 'react';
import ProfileInterests from '../ProfileInterests/ProfileInterests'
import Entertainment from '../../assets/entertainment.png';
import Food from '../../assets/food.png';
import Music from '../../assets/music.png';
import Active from '../../assets/active.png';

class OthersProfile extends Component {
    constructor(){
        super();
        this.state= {
            music: ["Hip Hop", "Indie", "Rap", "Rock", "R&B", "Pop", "Electronic", "Latin", "Folk", "Classical", "Jazz", "Reggae", "Desi", "Soul", "Bachata", "Techno"],
         
            entertainment: ["Musicals", "Live Music", "Comedy", "Jazz Clubs", "Burlesque", "Circus", "Plays", "Festivals", "Parties", "Clubs", "Events", "Theatre","Puppetry", "Parades", "NakedShakespeare"],

            active: ["Sailing", "Biking", "Hiking", "Roller Derby", "Picnic", "Parks", "Gyms", "Sport Clubs", "Kayaking", "Camping", "Ziplining", "Spelunking", "Paddleboarding", "Surfing", "Gardens", "Tennis", "Rooftop Drinking", "Rock Climbing", "Segway Tours", "Sailing", "Biking"],

            food: ["Mexican", "Turkish", "French", "Italian", "Vietnamese", "Japanese", "Korean", "Ethiopian", "Mediterranean", "Vegan", "American", "Southwestern", "Southern", "Indian", "English", "Thai", "Japanese", "Cuban", "Burmese", "Spanish", "Chinese", "Irish", "Swedish", "Tapas", "Hungarian"],
            selectedInterest: []
        }
    }
    componentDidMount = () => {
        this.props.handleOthersView();
    }
    render() {
        return (
            <div>
                <div>
                        <h1>Someone else's Profile</h1>
                </div>

                <div>
                    <div>SOME OTHER IMAGEIMAGE</div>
                    <div><h1>WHERE THEY LIVE</h1></div>
                </div>

                <div>
                    <h1>Interests</h1>
                </div>

                
                <div>
                    {/* .map through instrests and reder one for each */}
                    <ProfileInterests 
                        name='Music'
                        handleEditInterests={this.handleEditInterests}
                        subcat={this.state.music}
                        image={<img src={Music} alt='' 
                        otherUser={this.props.otherUser}/>}
                    />
                    <ProfileInterests 
                        name='Food'
                        handleEditInterests={this.handleEditInterests}
                        subcat={this.state.food}
                        image={<img src={Food} alt='' 
                        otherUser={this.props.otherUser}/>}
                    />


                    {console.log(this.props.otherUser)}

                    
                    <ProfileInterests 
                        name='Entertainment'
                        handleEditInterests={this.handleEditInterests}
                        subcat={this.state.entertainment}
                        image={<img src={Entertainment} alt='' 
                        otherUser={this.props.otherUser}/>}
                    />
                    <ProfileInterests 
                        name='Active'
                        handleEditInterests={this.handleEditInterests}
                        subcat={this.state.active}
                        image={<img src={Active} alt='' 
                        otherUser={this.props.otherUser}/>}
                    />
                </div>
            </div>
        );
    }
}

export default OthersProfile;