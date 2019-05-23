import React, { Component } from 'react';
import Music from '../../assets/music.png'
import Food from '../../assets/food.png'
import Entertainment from '../../assets/entertainment.png'
import Active from '../../assets/active.png'
import Heart from '../../assets/heart.svg'
import Charolotte from '../../assets/Charlotte.png'
import Jacques from '../../assets/Jacques.png'
import Amelie from '../../assets/Amelie.png'
import Angela from '../../assets/Angela.png'
import Restaurant from '../../assets/Restaurant.png'
import Restaurant_2 from '../../assets/Restaurant_2.png'
import Restaurant_3 from '../../assets/Restaurant_3.png'
import Restaurant_4 from '../../assets/Restaurant_4.png'
import Restaurant_5 from '../../assets/Restaurant_5.png'
import Sadiyah from '../../assets/Sadiyah.jpg'

class MyTrips extends Component {
    render() {
        return (
            <div className="my-trips">
                <div className="recc-favs">
                    <div id="reccomendations">Reccomendations</div>
                    <div id="faves"> My Favorites</div>
                </div> 


                <div className="icon-interests" >
                    <img src={Music} alt=''/>
                    <p className="icon-music-title"> Music </p> 

                    <img src={Food} alt=''/>
                    <p className="icon-food-title"> Food </p>

                    <img src={Entertainment} alt=''/>
                    <p className="icon-shows-title"> Shows</p>

                    <img src={Active} alt=''/>
                    <p className="icon-outdoor-title"> Outdoors </p>
                </div>


                <div className="user-review">
                    <div className="user-info">
                        <img className="user-profile-photo" src={Charolotte} alt='' />
                        <div>Charlotte</div>
                        <div>Paris, France</div>
                    </div>

                    <div className="location-info">
                        <img className="location-photo" src={Restaurant} alt='' />
                        <div className="location-name">Opalto</div>
                        <div className="location-address">69 rue de Charonne, 75011 Paris, France</div>
                    </div>

                    <div className="location-review">Very good planches apero. Such a good address in the 11th!</div>
                    <img className="heart-icon" src={Heart} alt='' />
                </div>




                <div className="user-review">
                    <div className="user-info">
                    <img className="user-profile-photo" src={Jacques} alt='' />
                        <div>Jacques</div>
                        <div>Paris, France</div>
                    </div>

                    <div className="location-info">
                    <img className="location-photo" src={Restaurant_2} alt='' />
                        <div>Signature Montmartre</div>
                        <div>12 rue des Trois Freres, 75018 Paris, France</div>
                    </div>

                    <div className="location-review">Worth every euro and more. Prawn pasta was the best dish. Absolutely recommend for couples and special occasions. Very good and rich champagne from local winery. Fabulous service!</div>
                    <img className="heart-icon" src={Heart} alt='' />
                </div>
                


                <div className="user-review">
                    <div>
                    <img className="user-profile-photo" src={Amelie} alt='' />
                        <div>Amelie</div>
                        <div>Paris, France</div>
                    </div>
                    <div className="location-info">
                    <img className="location-photo"  src={Restaurant_3} alt='' />
                        <div>Petit Boutary</div>
                        <div>16 rue Jacquemont, 75017 Paris, France</div>
                    </div>
                    <div className="location-review">The food and service was very very good but their wine was simply superb. The sommelier was incredibly knowledgable and passionate and enhanced the whole evening to a high end dining experience. </div>
                    <img className="heart-icon" src={Heart} alt='' />
                </div>

                <div className="user-review">
                    <div className="user-info">
                        <img className="user-profile-photo" src={Angela} alt='' />
                        <div>Angela</div>
                        <div>Paris, France</div>
                    </div>
                
                    <div className="location-info">
                    <img className="location-photo" src={Restaurant_4} alt='' />
                        <div>La Min</div>
                        <div>45 rue de Montreuil, 75011 Paris, France</div>
                    </div>

                    <div className="location-review">We ate three courses, both different, and all was so good! Best place in Paris so far! Waiter was so nice and the place was cosy. Absolutely recommend! </div>
                    <img className="heart-icon" src={Heart} alt='' />
                </div>

                <div className="user-review">
                    <div>
                    <img className="user-profile-photo" src={Sadiyah} alt='' />
                        <div>Sadiyah</div>
                        <div>Paris, France</div>
                    </div>
                    <div className="location-info">
                        <img className="location-photo" src={Restaurant_5} alt='' />
                        <div>Petite Fleur</div>
                        <div>5 rue Damremont, 75018 Paris, France</div>
                    </div>
                    <div className="location-review">Delicious escargot, rib steak, creme brulle! The location is very nice as well. Would absolutely recommend on a visit to Montmarte! </div>
                    <img className="heart-icon" src={Heart} alt='' />
                </div>
            </div>
        );
    }
}

export default MyTrips;


