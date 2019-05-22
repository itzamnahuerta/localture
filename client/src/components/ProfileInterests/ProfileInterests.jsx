import React, { Component } from 'react';import active from '../../assets/active.png';
import Interests from '../Interests/Interests'
import Entertainment from '../../assets/entertainment.png';
import Food from '../../assets/food.png';
import Music from '../../assets/music.png';
import Active from '../../assets/active.png';
import Note from '../../assets/note.png'

class ProfileInterests extends Component {
    constructor(){
        super();
        this.state = {
            editInterests: false
        }
    }

    handleEditInterests = (e) => {
        e.preventDefault();
        this.setState({editInterests: true})
    }

    render() {
        if(this.state.editInterests){
            return <h1>working</h1>
        
        }
        else if(!this.state.editInterests) {
            return (
                <div>
                    {this.props.image}
                    <img 
                    src={Note} 
                    onClick={this.props.handleEditInterests}
                    id={this.props.name}/>
                    <div>{this.props.name}</div>
                    <ul>
                        <li>Sub Category</li>
                        <li>Sub Category</li>
                        <li>Sub Category</li>
                        <li>Sub Category</li>
                    </ul>
                </div>
            );
        }
    }
}

export default ProfileInterests;