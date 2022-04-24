import React from "react";
import logo from "./logo.svg";
import './Landing.css'
import Navbar from "../NavBar/NavBar"
import { Link } from "react-router-dom";


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
          </h1>
        <p>Please login or register to proceed.</p>
        <div className="buttons">
          <button className="button-52"> <Link to="/login">Login</Link></button>
          <div className="space"></div>
          <button className="button-52"><Link to="/register">Register</Link></button>
            </div>       
         
        </div>
      </div>
    </div>
  );
}


export default Landing