import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class TravelersNear extends Component {
    render() {
        if(!this.props.authenticated){
            return <Redirect to='/' />
        }
        else{
            return (
                <div>
                    Travelers Near You
                    {/* make a componenet that holds data for other users */}
                    {/* add links to route to <OthersProfile /> on each componenet */}
                    <h1>HELLPP</h1>
                </div>
            );
        }
    }
}

export default TravelersNear;