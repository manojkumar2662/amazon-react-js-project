import React from 'react'
import menu from '../assets/menu_icon.png'
import './navbottom.css'

function Navbottom() {
  return (
    <div className="nav-bottom">
        <div>
          <img src={menu} width="15" alt="Menu Icon" />
         
        </div >
        <p>All</p>
        <a className="btn" href="/">Today's Deals</a>
        <a className="btn" href="/">Customer Service</a>
        <a className="btn" href="/">Registry</a>
        <a className="btn" href="/">Gift Cards</a>
        <a className="btn" href="/">Sell</a>
      </div>
  )
}

export default Navbottom