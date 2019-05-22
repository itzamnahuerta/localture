import React, { Component } from 'react';
import TravelersNear from '../TravelersNear/TravelersNear'
import MyTrips from '../MyTrips/MyTrips'

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
            <div>
                <h1>Dashboard</h1>
                <div>
                    <button id='myTrips' value={'myTrips'} onClick={this.handleTabState}>
                        <h3>My Trips</h3>
                    </button>
                    <button id='Travelers'value={'Travelers'} onClick={this.handleTabState}>
                        <h3>Travelers to my city</h3>
                    </button>
                </div>
                <div>IMAGE OF CITY</div>
                    {this.handleTabSwitch()}
                    {/* THIS PART IS DIFFERENT WITH THE CONDITIONAL RENDER DEPENDING ON WHICH TAB IS CLICK.  */}
                {/* <TravelersNear /> */}
                {/* <MyTrips /> */}
            </div>
        );
    }
}

export default Dash;