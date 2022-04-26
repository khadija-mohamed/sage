import React from "react";
import logo from "./logo.svg";
import './Register.css'
import HomeNav from "../NavBar/HomeNav"
import { Link } from "react-router-dom";


const Register = () => {
  return  (
   
  
    <div className="main">
       <HomeNav /> 
      <div className="orange-main">
        <div className="transparent-text">
        </div>
        <div className="sage-block">
          <div className="head-main">
            <span className="head-left"> S</span>
            <img className="o3" src={logo} alt="logo"/>
            <span className="head-right">GE</span>
          
        <h4>Please register as either a Sage or a Sagee to proceed.</h4>
        <div className="buttons">
          <button className="button-52"> <Link to="/register/sage">Sage</Link></button>
          <div className="space"></div>
          <button className="button-52"><Link to="/register/sagee">Sagee</Link></button>
            </div>       
        </div>
        </div>
      </div>
    </div>
  );
}


export default Register;