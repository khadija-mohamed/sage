import React from 'react';
import logo from "./logo.svg"
import "./Register.css"
import Navbar from "../NavBar/NavBar"


export default function Register() {
  return(
    <div className="main-div">
    <Navbar />
    <div className="orange-main">
      <div className="transparent-text">
      </div>
      <div className="sage-block">
        <h1 className="head-main">
          <span className="head-left"> S</span>
          <img className="o3" src={logo} alt="logo"/>
          <span className="head-right">GE</span>
          <h4>Sign up as a Sagee or Sage</h4>
          <div className="buttons">
            <button class="button-52"> <a href="/register/sagee">Sagee</a></button>
            <div class="space"></div>
            <button class="button-52"><a href="/register/sage">Sage</a></button>
          </div>       
        </h1>
      </div>
    </div>
  </div>
  )
}