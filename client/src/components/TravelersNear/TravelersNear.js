import React, { Component } from 'react';
import Music from '../../assets/music.png'
import Food from '../../assets/food.png'
import Entertainment from '../../assets/entertainment.png'
import Active from '../../assets/active.png'
import { Redirect } from 'react-router-dom'
import Sadiyah from '../../assets/Sadiyah.jpg'
import Heart from '../../assets/heart.svg'
import Pierre from '../../assets/Pierre.jpg'
import Ronan from '../../assets/Ronan.jpg'
import Noriko from '../../assets/Noriko.jpg'
import Jaime from '../../assets/Jamie.png'
import Analisa from '../../assets/Analisa.png'


class TravelersNear extends Component {
    render() {
        // if(!this.props.authenticated){
        //     return <Redirect to='/' />
        // }
        // else{
            return (
                <div className="travelers-near">
                    <div className="send-recc">
                        <h4>Send Reccomendations</h4>
                    </div>

                    <div className="icon-interests" >
                    <img src={Music} alt=''/>
                    <p className="icon-music-title"> Music </p> 

                    <img src={Food} alt=''/>
                    <p className="icon-food-title"> Food </p>

                    <img src={Entertainment} alt=''/>
                    <p className="icon-shows-title"> Shows</p>

                    <img src={Active} alt=''/>
                    <p className="icon-outdoor-title"> Outdoors </p>
                </div>

                    <div className="user-interest-post">
                        <div className="user-info"> 
                            <img className="user-profile-photo" src={Pierre} alt='' />
                            <div>Pierre G.</div>
                        </div>
                        <div className="interest-post">
                            <strong>Pierre</strong> 
                            is looking for a barbeque joint in the 
                            <strong>East Village</strong>
                        </div>
                        <div className="love-interests"> 
                            <img className="heart-icon" src={Heart} alt='' />
                            <div className="personal-interests">BBQ, Animation, Oenophile</div>  
                        </div>                      
                    </div>
                    <div className="user-interest-post">
                         <div className="user-info"> 
                            <img className="user-profile-photo" src={Sadiyah} alt='' />
                            <div>Sadiyah G.</div>
                        </div>
                        <div  className="interest-post">
                            <strong>Sadiyah G.</strong> 
                            is looking for Jazz events in the
                            <strong>West Village</strong>, NYC
                        </div>
                        <div className="love-interests"> 
                            <img  className="heart-icon" src={Heart} alt='' />
                            <div>Cocktail Culture, Fashion, Vintage Shopping</div>
                        </div>
                    </div>


                </div>
            );
        }
    // }
}

export default TravelersNear;