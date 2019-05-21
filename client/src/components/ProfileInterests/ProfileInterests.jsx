import React, { Component } from 'react';import active from '../../assets/active.png';
import Entertainment from '../../assets/entertainment.png';
import Food from '../../assets/food.png';
import Music from '../../assets/music.png';
import Active from '../../assets/active.png';

class ProfileInterests extends Component {
    render() {
        return (
            <div>
                {this.props.image}
                <div>{this.props.name}</div>
                <ul>
                    {/* .map through sub */}
                    <li>Sub Category</li>
                    <li>Sub Category</li>
                    <li>Sub Category</li>
                    
                </ul>
            </div>
        );
    }
}

export default ProfileInterests;