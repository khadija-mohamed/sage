
// import React from "react";

// const SideBar = ({sidebar}) => {
//   return (
//     <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
//       <li><i class="fa-solid fa-user"></i><a href="/dashboard/mentee/menteeprofile">My Profile</a></li>
//       <li><i class="fa-solid fa-seedling"></i><a href="/dashboard/mentee/menteefeed">My Feed</a></li>
//       <li><i class="fa-solid fa-users"></i><a href="/dashboard/mentee/menteefind">Connect with a Sage</a></li>
//       <li><i class="fa-solid fa-calendar-check"></i><a href="/dashboard/booking">Bookings</a></li>
//       <li><i class="fa-solid fa-arrow-right-from-bracket"></i><a href="/">Log out</a></li>
//     </div>
//   )
// }

import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({sidebar}) => {
  return (
    <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
      <li><i className="fa-solid fa-user"></i><Link to="/dashboard/mentee/menteeprofile">My Profile</Link></li>
      <li><i className="fa-solid fa-seedling"></i><Link to="/dashboard/mentee/menteefeed">My Feed</Link></li>
      <li><i className="fa-solid fa-users"></i><Link to="/dashboard/video">Video Chat</Link></li>
      <li><i className="fa-solid fa-calendar-check"></i><Link to="/dashboard/booking">Bookings</Link></li>
      <li><i className="fa-solid fa-arrow-right-from-bracket"></i><Link to="/logout">Log out</Link></li>
    </div>
  )
}


 export default SideBar;