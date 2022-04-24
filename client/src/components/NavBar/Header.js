import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Header(props) {
  const[sidebar, setSidebar] = useState(false);
  // console.log("headerprops",props.user)
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }

  return (
  <div className="Navbar"> 
    <div className='menu' onClick={toggleSidebar}>
      <i className="fa-solid fa-bars"></i>
    </div>
    <div className="title">Sage {props.user}</div>
  <div className={sidebar?"backdrop backdrop--open":"backdrop"} onClick={toggleSidebar}></div>
  <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
    <li><i className="fa-solid fa-user"></i><Link to="/dashboard/mentee/menteeprofile">My Profile</Link></li>
    <li><i className="fa-solid fa-seedling"></i><Link to="/dashboard/mentee/menteefeed">My Feed</Link></li>
    <li><i className="fa-solid fa-users"></i><Link to="/dashboard/mentee/menteefind">Connect with a Sage</Link></li>
    <li><i className="fa-solid fa-calendar-check"></i><Link to="/dashboard/booking">Bookings</Link></li>
    <li><i className="fa-solid fa-arrow-right-from-bracket"></i><Link to="/">Log out</Link></li>
  </div>
</div>


)}

export default Header;