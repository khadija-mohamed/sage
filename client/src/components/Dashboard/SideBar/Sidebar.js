import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ sidebar }) => {
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <div className="space">
        <li>
          <i class="fa-solid fa-user"></i>
          <Link to="/dashboard/mentee/menteeprofile">My Profile</Link>
        </li>
        <li>
          <i class="fa-solid fa-seedling"></i>
          <Link to="/dashboard/mentee/menteefeed">My Feed</Link>
        </li>
        <li>
          <i class="fa-solid fa-users"></i>
          <Link to="/dashboard/mentee/menteefind">Connect with a Sage</Link>
        </li>
        <li>
          <i class="fa-solid fa-calendar-check"></i>
          <Link to="/dashboard/booking">Bookings</Link>
        </li>
        <li>
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
          <Link to="/logout">Log out</Link>
        </li>
      </div>
    </div>
  );
};

export default SideBar;
