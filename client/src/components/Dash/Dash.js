import React, { Component } from 'react';
import TravelersNear from '../TravelersNear/TravelersNear'

class Dash extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <div>
                    <h2>My Trips</h2>
                </div>
                <div>
                    <h2>Travelers to my city</h2>
                </div>
                <div>IMAGE OF CITY</div>
                
                    {/* THIS PART IS DIFFERENT WITH THE CONDITIONAL RENDER DEPENDING ON WHICH TAB IS CLICK.  */}
                    {/* THIS SECTION IS FOR TRAVELERS TO MY CITY */}




                    {/* //not rendering components */}
                <TravelersNear />



                <div>
                        <h2>Send Reccomendations</h2>
                    </div>
                    <div>
                        IMAGES OF RECCOMENDATION CATEGORIES
                    </div>



                    <div>
                        Component that will show people looking for reccomendations
                    </div>
                <div>
                        Travelers to my city
                        or
                        My city
                    </div>
            </div>
        );
    }
}

export default Dash;