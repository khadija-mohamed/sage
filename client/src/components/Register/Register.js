import React from 'react';
import logo from "./logo.svg"
import "./Register.css"
import Navbar from "../NavBar/NavBar"
import { Link } from "react-router-dom";


export default function Register() {
  return(
    <div className="main-div">
    <Navbar />
    <div className="orange-main">
      <div className="transparent-text">
      </div>
      <div className="sage-block">
        <h1 className="head-main"></h1>
          <span className="head-left"> S</span>
          <img className="o3" src={logo} alt="logo"/>
          <span className="head-right">GE</span>
          <h4>Sign up as a Sagee or Sage</h4>
          <div className="buttons">
            <button className="button-52"> <Link to="/register/sagee">Sagee</Link></button>
            <div className="space"></div>
            <button className="button-52"><Link to="/register/sage">Sage</Link></button>
          </div>       
        
      </div>
    </div>
  </div>
  )
}