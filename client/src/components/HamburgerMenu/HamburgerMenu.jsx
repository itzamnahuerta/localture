import React from 'react'
import { Link } from 'react-dom'


const HamburgerMenu = (props) => {
    // const {} = props;
    // const showMenu = isMenuClicked === true ? 'sidebar open'

    return(
        <div className="sidebar">
        <div onClick={props.handleMenuOpen}>
            <div className="xMark"> x </div>
        </div>

        </div> 
    )

}

export default HamburgerMenu;