import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Interests extends Component {
    render() {
        if(!this.props.authenticated){
            return <Redirect to='/' />
        }
        else {
            return (
                <div>
                    <div>ALL THIS other SSTUFF</div>
                    <div></div>
                    <div></div>
                </div>
            );
        }
    }
}

export default Interests;
