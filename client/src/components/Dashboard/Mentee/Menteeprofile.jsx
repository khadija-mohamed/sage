import React from 'react';
import logo from "./logo.svg"
import light from "./light.svg"
import './Menteeprofile.css';
import Header from '../../NavBar/Header';

export default function Menteeprofile() {
  return(
    <div className="menteeprofile-wrapper">
     <Header/>
     <div className='mentee-profile'>
     <img className="person" src={logo} alt="logo"/>
     <div class="grid">

     </div>
     <img className="light" src={light} alt="logo"/>
     <img className="light" src={light} alt="logo"/>
     <img className="light" src={light} alt="logo"/>
     <img className="light" src={light} alt="logo"/>
     <img className="light" src={light} alt="logo"/>
     </div>
    </div>
  )
}