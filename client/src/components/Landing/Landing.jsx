import React from "react";
import logo from "./logo.svg";
import './Landing.css'
import HomeNav from "../NavBar/HomeNav"
import { Link } from "react-router-dom";


const Landing = () => {
  return  (
   
  
    <div className="main">
       <HomeNav /> 
      <div className="orange-main">
      <div className="register-btn">
        <button className="button-52" type="submit"><Link to="/about"><span className="register-btn-text">About</span></Link></button>
        </div>
        <div className="transparent-text">
        </div>
        <div className="sage-block">
          <div className="head-main">
            <span className="head-left"> S</span>
            <img className="o3" src={logo} alt="logo"/>
            <span className="head-right">GE</span>
          
        <h4>Please login or register to proceed.</h4>
        <div className="buttons">
          <button className="button-52"> <Link to="/login">Login</Link></button>
          <div className="space"></div>
          <button className="button-52"><Link to="/register">Register</Link></button>
            </div>       
        </div>
        </div>
      </div>
    </div>
  );
}


export default Landing;
