import React from "react";

const SideBar = ({sidebar}) => {
  return (
    <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
      <li><i class="fa-solid fa-user"></i><a href="/dashboard/menteeprofile">My Profile</a></li>
      <li><i class="fa-solid fa-seedling"></i><a href="/dashboard/menteefeed">My Feed</a></li>
      <li><i class="fa-solid fa-users"></i><a href="/dashboard/menteefind">Connect with a Sage</a></li>
      <li><i class="fa-solid fa-calendar-check"></i><a href="/dashboard/booking">Bookings</a></li>
      <li><i class="fa-solid fa-arrow-right-from-bracket"></i><a href="/">Log out</a></li>


    </div>
  )
}

export default SideBar;