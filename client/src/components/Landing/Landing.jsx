import React from "react";
import logo from "./logo.svg";
import './Landing.css'
import Navbar from "../NavBar/NavBar"


const Landing = () => {
  return  (
   
  
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
            <h4>Please login or register to proceed.</h4>
            <div className="buttons">
              <button class="button-52"> <a href="/login">Login</a></button>
              <div class="space"></div>
              <button class="button-52"><a href="/register">Register</a></button>
            </div>       
          </h1>
        </div>
      </div>
    </div>
  );
}


export default Landing