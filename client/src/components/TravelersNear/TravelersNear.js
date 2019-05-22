import React, { Component } from 'react';
import Music from '../../assets/music.png'
import Food from '../../assets/food.png'
import Entertainment from '../../assets/entertainment.png'
import Active from '../../assets/active.png'
import { Redirect } from 'react-router-dom'
import Sadiyah from '../../assets/Sadiyah.jpg'
import Heart from '../../assets/heart.svg'
import Angela from '../../assets/Angela.png'
import Amelie from '../../assets/Amelie.png'
import Jacques from '../../assets/Jacques.png'
import Charolotte from '../../assets/Charlotte.png'


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
                        <img src={Music} alt=''/>
                        <img src={Food} alt=''/>
                        <img src={Entertainment} alt=''/>
                        <img src={Active} alt=''/>
                        <hr/>
                    </div>
                    <div>
                    <div>
                    <img src={Sadiyah} alt='' />
                        <div>Sadiyah</div>
                        <div>Paris, France</div>
                    </div>
                    <div>
                        <div>Business Image</div>
                        <div>Petite Fleur</div>
                        <div>5 rue Damremont, 75018 Paris, France</div>
                    </div>
                    <div>Delicious escargot, rib steak, creme brulle! The location is very nice as well. Would absolutely recommend on a visit to Montmarte! </div>
                    <img src={Heart} alt='' />
                    <div>BBQ, Animation, Oenophile</div>
                </div>

                <hr/>
                
                <div>
                    <div>
                    <img src={Angela} alt='' />
                        <div>Angela</div>
                        <div>Paris, France</div>
                    </div>
                    <div>
                        <div>Business Image</div>
                        <div>La Min</div>
                        <div>45 rue de Montreuil, 75011 Paris, France</div>
                    </div>
                    <div>We ate three courses, both different, and all was so good! Best place in Paris so far! Waiter was so nice and the place was cosy. Absolutely recommend! </div>
                    <img src={Heart} alt='' />
                    <div>Cocktail Culture, Fashion, Vintage Shopping</div>
                </div>

                <hr/>
                
                <div>
                    <div>
                    <img src={Amelie} alt='' />
                        <div>Amelie</div>
                        <div>Paris, France</div>
                    </div>
                    <div>
                        <div>Business Image</div>
                        <div>Petit Boutary</div>
                        <div>16 rue Jacquemont, 75017 Paris, France</div>
                    </div>
                    <div>The food and service was very very good but their wine was simply superb. The sommelier was incredibly knowledgable and passionate and enhanced the whole evening to a high end dining experience. </div>
                    <img src={Heart} alt='' />
                    <div>Record Shopping, Fashion, Animation</div>
                </div>

                <hr/>
                
                <div>
                    <div>
                    <img src={Jacques} alt='' />
                        <div>Jacques</div>
                        <div>Paris, France</div>
                    </div>
                    <div>
                        <div>Business Image</div>
                        <div>Signature Montmartre</div>
                        <div>12 rue des Trois Freres, 75018 Paris, France</div>
                    </div>
                    <div>Worth every euro and more. Prawn pasta was the best dish. Absolutely recommend for couples and special occasions. Very good and rich champagne from local winery. Fabulous service!</div>
                    <img src={Heart} alt='' />
                    <div>Southern Culture, Film, Shopping</div>
                </div>

                <hr/>
                
                <div>
                    <div>
                        <img src={Charolotte} alt='' />
                        <div>Charlotte</div>
                        <div>Paris, France</div>
                    </div>
                    <div>
                        <div>Business Image</div>
                        <div>Opalto</div>
                        <div>69 rue de Charonne, 75011 Paris, France</div>
                    </div>
                    <div>Very good planches apero.   Such a good address in the 11th!</div>
                    <img src={Heart} alt='' />
                    <div>Pottery, Vegan Cooking, Gardening</div>
                </div>

                <hr/>
                
                </div>
            );
        }
    // }
}

export default TravelersNear;