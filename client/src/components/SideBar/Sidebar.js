import React from "react";

const SideBar = ({sidebar}) => {
  return (
    <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
      <li><i class="fa-solid fa-user"></i>My Profile</li>
      <li><i class="fa-solid fa-seedling"></i>My Feed</li>
      <li><i class="fa-solid fa-users"></i>Connect with Sage</li>
      <li><i class="fa-solid fa-calendar-check"></i>Bookings</li>
      <li><i class="fa-solid fa-arrow-right-from-bracket"></i>Log out</li>


    </div>
  )
}

export default SideBar;