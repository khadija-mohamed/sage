import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Backdrop from '../SideBar/Backdrop';
import SideBar from '../SideBar/Sidebar';
import './Dashboard.css';
import MentorList from "./Mentor/MentorList"
import useApplicationData from "../../hooks/useApplicationData.js";

export default function Dashboard() {
  const[sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }
  return(
    <div className='Dashboard'>
      <NavBar openSidebar={toggleSidebar}/>
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}/>
      <SideBar sidebar={sidebar}/>
    </div>


  )

  }