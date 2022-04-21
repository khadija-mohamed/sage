import React from 'react';
import logo from "./logo.svg"
import light from "./light.svg"
import './Menteeprofile.css';
import Dashboard from '../Dashboard';

export default function Menteeprofile() {
  return(
    <div className="menteeprofile-wrapper">
     <Dashboard/>
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