import React, { Component } from 'react';
import TravelersNear from '../TravelersNear/TravelersNear'
import MyTrips from '../MyTrips/MyTrips'
import ParisLandscape from '../../media/paris_landscape.png'

class Dash extends Component {
    constructor(){
        super();
        this.state={
            myTrips: true
        }
    }
    handleTabSwitch = () => {
        if(this.state.myTrips){
            return <MyTrips />
        }
        else{
            return <TravelersNear />
        }
    }
    handleTabState = (e) => {
        e.preventDefault();
        // let tab = e.target.id;
        // console.log(tab)
        this.setState({myTrips: !this.state.myTrips})
    }
    render() {
        return (
            <div className="dashboard">
                <div className="mytrips-travelers">
                    <button id='myTrips' value={'myTrips'} onClick={this.handleTabState}>
                        <h3>My Trips</h3>
                    </button>
                    <button id='travelers' value={'Travelers'} onClick={this.handleTabState}>
                        <h3>Travelers to my city</h3>
                    </button>
                </div>

                <img className="trip-landscape" src={ParisLandscape} />
                    {this.handleTabSwitch()}
                    {/* THIS PART IS DIFFERENT WITH THE CONDITIONAL RENDER DEPENDING ON WHICH TAB IS CLICK.  */}
            </div>
        );
    }
}

export default Dash;