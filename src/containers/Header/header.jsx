import React from 'react'
import './header.styles.scss'
import coinTop from '../../assets/coinTop.png'
const Header = () => {
  return (
    <div className="cw__head">
        <div className="cw__head-text">
            <h3 className="text-heading">
                Dicover  Amazing
                Crypto World
            </h3>
            <p className="text-subheading">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip
            </p>
            <div className="cw__head-text_buttons">
                <button className="btn-filled"><span>Buy Crypto</span></button> 
                <button className="btn-outline"><span>Sell Crypto</span></button>
            </div>
        </div>
        <div className="cw__head-img">
            <img src={coinTop} alt="coins box and valut"/>
        </div>
    </div>
  )
}

export default Header