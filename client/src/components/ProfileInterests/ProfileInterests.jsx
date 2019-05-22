import React, { Component } from 'react';import active from '../../assets/active.png';
import Entertainment from '../../assets/entertainment.png';
import Food from '../../assets/food.png';
import Music from '../../assets/music.png';
import Active from '../../assets/active.png';
import Note from '../../assets/note.png'
import Add from '../../assets/add.png'

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
    componentWillReceiveProps = () => {

    }

    iconSwitch = () => {
        console.log(this.props.otherUser)
        if(this.props.otherUser){
            return <img 
                    src={Note} 
                    onClick={this.props.handleEditInterests}
                    id={this.props.name}
                    alt='' 
                    />
        }
        else{
            return <img src={Add} alt=''/>
        }
    }

    render() {
        if(this.props.otherUser){
            return(
                <div>
                    {this.props.image}
                    <img 
                        src={Note} 
                        onClick={this.props.handleEditInterests}
                        id={this.props.name}
                        alt=''
                        />
                    <div>{this.props.name}</div>


{console.log(this.props.otherUser)}


                    <ul>
                        {
                            this.props.selectedInterest.map(interest => {
                                return(
                                    <li>interest</li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        }
        else{
            return (
                <div>
                    {this.props.image}
                    <img 
                        src={Add} 
                        onClick={this.props.handleEditInterests}
                        id={this.props.name}/>
                    <div>{this.props.name}</div>
                    <ul>
                    {
                            this.props.selectedInterest.map(interest => {
                                return(
                                    <li>{interest}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        }
    }
}

export default ProfileInterests;