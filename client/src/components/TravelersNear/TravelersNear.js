import React, { Component } from 'react';
import Music from '../../assets/music.png'
import Food from '../../assets/food.png'
import Entertainment from '../../assets/entertainment.png'
import Active from '../../assets/active.png'
import { Redirect } from 'react-router-dom'
import Sadiyah from '../../assets/Sadiyah.jpg'
import Heart from '../../assets/heart.svg'
import Pierre from '../../assets/Pierre.jpg'
import Ronan from '../../assets/Ronan.jpg'
import Noriko from '../../assets/Noriko.jpg'
import Jaime from '../../assets/Jamie.png'
import Analisa from '../../assets/Analisa.png'


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
                        <hr/>
                    </div>
                    <div>
                        {/* <img src={All} alt=''/> */}
                        <img src={Music} alt=''/>
                        <img src={Food} alt=''/>
                        <img src={Entertainment} alt=''/>
                        <img src={Active} alt=''/>
                    <hr/>
                    </div>

                    <div>
                        <div>
                            <img src={Pierre} alt='' />
                            <div>Pierre G.</div>
                            <div><strong>Pierre</strong> is looking for a barbeque joint in the <strong>East Village</strong></div>
                        </div>
                        <img src={Heart} alt='' />
                        <div>BBQ, Animation, Oenophile</div>
                    </div>

                    <hr/>
                
                    <div>
                        <div>
                            <img src={Sadiyah} alt='' />
                            <div>Sadiyah G.</div>
                            <div><strong>Sadiyah G.</strong> is looking for Jazz events in the <strong>West Village</strong>, NYC</div>
                        </div>
                        <img src={Heart} alt='' />
                        <div>Cocktail Culture, Fashion, Vintage Shopping</div>
                    </div>

                    <hr/>
                
                    <div>
                        <div>
                            <img src={Ronan} alt='' />
                            <div>Ronan D.</div>
                            <div><strong>Ronan D.</strong> is looking for a craft beer garden in <strong>Astoria, Queens</strong></div>
                        </div>
                        <img src={Heart} alt='' />
                        <div>Record shopping, Fashion, Animation</div>
                    </div>

                    <hr/>
                
                    <div>
                        <div>
                            <img src={Noriko} alt='' />
                            <div>Noriko L.</div>
                            <div><strong>Noriko L.</strong> is looking for a hip-hop spot in <strong>Flatiron, </strong>NYC</div>
                        </div>
                        <img src={Heart} alt='' />
                        <div>Record Shopping, Film, Southern food</div>
                    </div>

                    <hr/>
                
                    <div>
                        <div>
                            <img src={Analisa} alt='' />
                            <div>Analisa K.</div>
                            <div><strong>Analisa K.</strong> is looking for Mexican food near <strong>Times Square</strong></div>
                        </div>
                        <img src={Heart} alt='' />
                        <div>Fashion, Vintage shopping, Cocktail Culture</div>
                    </div>

                    <hr/>

                    <div>
                        <div>
                            <img src={Jaime} alt='' />
                            <div>Jaime G.</div>
                            <div><strong>Jaime G.</strong> is looking for handcrafted art bear <strong>DUMBO, BK</strong></div>
                        </div>
                        <img src={Heart} alt='' />
                        <div>Pottery, Vegan Cooking, Gardens</div>
                    </div>

                </div>
            );
        }
    // }
}

export default TravelersNear;