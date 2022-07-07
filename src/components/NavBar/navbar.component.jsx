import React, { useState } from 'react'
import './navbar.styles.scss'
import { GoThreeBars } from 'react-icons/go'
const Menu = () => (
    <React.Fragment>
      <p><a href="#about">About</a></p>
      <p><a href="#pricing">Pricing</a></p>
      <p><a href="#contact"> Contact</a></p>
      <p><a href="#crypto">Buy Crypto</a></p>
    </React.Fragment>
  )

const NavBar = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false)
  return (
    <div className="cw__navbar">
        <div className="cw__navbar-links">
            <div className="cw__navbar-links_logo">
                <p><a href="#home">Crypto World</a></p>
            </div>
            <div className="cw__navbar-links_container">
                <Menu />
            </div>
            <div className="cw__navbar-links_menu">
                <GoThreeBars onClick={() => setisMenuOpen(!isMenuOpen)}/>
                <div className={`cw__navbar-links_box ${isMenuOpen ? 'open' : 'closed'}`} >
                    <Menu />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar