import React, { Component } from 'react';
import TravelersNear from '../TravelersNear/TravelersNear'
import MyTrips from '../MyTrips/MyTrips'

class Dash extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <div>
                    <div>
                        <h3>My Trips</h3>
                    </div>
                    <div>
                        <h3>Travelers to my city</h3>
                    </div>
                </div>
                <div>IMAGE OF CITY</div>
                
                    {/* THIS PART IS DIFFERENT WITH THE CONDITIONAL RENDER DEPENDING ON WHICH TAB IS CLICK.  */}
                {/* <TravelersNear /> */}
                <MyTrips />
            </div>
        );
    }
}

export default Dash;