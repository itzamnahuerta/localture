import React from 'react'
import { Link } from 'react-router-dom'


const HamburgerMenu = (props) => {
    const showMenu = props.is_hamburger_menu_clicked === true ? 'sidebar open' : 'sidebar'
    console.log('what about now ', props.is_hamburger_menu_clicked)
    return(

        <div className={showMenu}>
            <div onClick={props.handleMenuOpen}> 
                <div className="xMark"> x </div>
            </div>
            <div className="sidebar-title"> LOCALTURE </div>
            <Link to="/"> Dashboard </Link>
            <Link to="/"> My Profile</Link>
            <Link to="/"> Logout </Link>
        </div> 
    )

}

export default HamburgerMenu;