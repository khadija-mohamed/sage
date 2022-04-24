import React, { useState } from 'react';
import { UserContext } from '../../UserContext';
import NavBar from '../NavBar/NavBar';
import Backdrop from '../SideBar/Backdrop';
import SideBar from '../SideBar/Sidebar';
import './Dashboard.css';
import Header from '../NavBar/Header';


export default function Dashboard() {
  
  // console.log("whatttt",user);
  // const[sidebar, setSidebar] = useState(false);
  // const toggleSidebar = () => {
  //   setSidebar((prevState) => !prevState)
  // }
  return(
    <div className='Dashboard'>
      {/* <h4>{user.email}</h4>  */}
      {/* <NavBar openSidebar={toggleSidebar}/>
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}/>
      <SideBar sidebar={sidebar}/> */}
      <Header/>
    </div>


  )

  }