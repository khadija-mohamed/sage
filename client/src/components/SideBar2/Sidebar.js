import React from "react";
import {Link} from 'react-router-dom';

const SideBar = ({sidebar}) => {
  return (
    <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
      <li><i className="fa-solid fa-user"></i><Link to="/dashboard/mentor/mentorprofile">My Profile</Link></li>
      <li><i className="fa-solid fa-seedling"></i><Link to="/dashboard/mentor/mentorfeed">My Feed</Link></li>
      <li><i className="fa-solid fa-camera-web"></i><Link to="/dashboard/video">Video Chat</Link></li>
      <li><i className="fa-solid fa-arrow-right-from-bracket"></i><Link to="/logout">Log out</Link></li>
    </div>
  )
}
 export default SideBar;