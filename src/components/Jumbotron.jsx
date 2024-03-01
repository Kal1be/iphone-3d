import React from 'react'
import Iphone from '../assets/images/iphone-14.jpg'
import HoldingIphone from "../assets/images/iphone-hand.png"

function Jumbotron() {

  const handlemore=()=>{
   const element= document.querySelector(".sound-section")
   window.scrollTo({
    top:element.getBoundingClientRect().top,
    left:0,
    behavior:"smooth"
   })
  }
  return (
    <div className='jumbotron-section wrapper'>
      <h2 className='title'> New</h2>
      <img src={Iphone} className='logo' alt="logo image" />
      <p className='text'>Big and Bigger</p>
      <span>From $41.62/mo.For 24 mo .Or $999 before trade-in </span>
      <ul className='links'>
  <li>
    <button className='button'>Buy</button>
  </li>
  <li>
    <a className='link' onClick={handlemore}> Learn more</a> 
  </li>
      </ul>
      <img src={HoldingIphone} className='iphone-img' alt="iphone hand" />
    </div>
  )
}

export default Jumbotron
 