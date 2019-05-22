import React, { Component } from 'react';
import Music from '../../assets/music.png'
import Food from '../../assets/food.png'
import Entertainment from '../../assets/entertainment.png'
import Active from '../../assets/active.png'
import { Redirect } from 'react-router-dom'

class TravelersNear extends Component {
    render() {
        // if(!this.props.authenticated){
        //     return <Redirect to='/' />
        // }
        // else{
            return (
                <div>
                    <div>
                        <h2>Send Reccomendations</h2>
                    </div>
                    <div>
                        IMAGES OF RECCOMENDATION CATEGORIES
                    </div>
                    <div>
                        Component that will show people looking for reccomendations
                    </div>

                </div>
            );
        }
    // }
}

export default TravelersNear;