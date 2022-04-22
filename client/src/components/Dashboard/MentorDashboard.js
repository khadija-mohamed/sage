import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Backdrop from '../SideBar2/Backdrop';
import SideBar from '../SideBar2/Sidebar';
import './Dashboard.css';


export default function MentorDashboard() {
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