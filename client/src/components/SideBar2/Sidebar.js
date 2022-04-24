// import React from "react";

const SideBar = ({sidebar}) => {
  return (
    <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
      <li><i class="fa-solid fa-user"></i><a href="/dashboard/mentor/mentorprofile">My Profile</a></li>
      <li><i class="fa-solid fa-seedling"></i><a href="/dashboard/mentor/mentorfeed">Calendar</a></li>
      <li><i class="fa-solid fa-camera-web"></i><a href="/dashboard/video">Video Chat</a></li>
      <li><i class="fa-solid fa-arrow-right-from-bracket"></i><a href="/">Log out</a></li>
    </div>
  )
}

// export default SideBar;