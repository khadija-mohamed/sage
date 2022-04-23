
import React, { useState } from 'react';

function Header(props) {
  const[sidebar, setSidebar] = useState(false);
  console.log("headerprops",props.user)
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }

  return (
  <div className="Navbar"> 
    <div className='menu' onClick={toggleSidebar}>
      <i class="fa-solid fa-bars"></i>
    </div>
    <div className="title">Sage {props.user}</div>
  <div className={sidebar?"backdrop backdrop--open":"backdrop"} onClick={toggleSidebar}></div>
  <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
    <li><i class="fa-solid fa-user"></i><a href="/dashboard/mentee/menteeprofile">My Profile</a></li>
    <li><i class="fa-solid fa-seedling"></i><a href="/dashboard/mentee/menteefeed">My Feed</a></li>
    <li><i class="fa-solid fa-users"></i><a href="/dashboard/mentee/menteefind">Connect with a Sage</a></li>
    <li><i class="fa-solid fa-calendar-check"></i><a href="/dashboard/booking">Bookings</a></li>
    <li><i class="fa-solid fa-arrow-right-from-bracket"></i><a href="/">Log out</a></li>
  </div>
</div>


)}

export default Header;