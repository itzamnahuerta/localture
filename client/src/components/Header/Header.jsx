import React, {Component} from 'react'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

export default class Header extends Component {
  render() {
    return (
      <div>
          <h1>
            THIS IS THE HEADER, SON
            <HamburgerMenu />
          </h1>
      </div>
    )
  }
}
