import React, { useState,useContext } from 'react';
import NavBar from '../NavBar/NavBar';
import Backdrop from '../SideBar/Backdrop';
import SideBar from '../SideBar/Sidebar';
import { UserContext } from '../../UserContext';
import './Dashboard.css';


export default function Dashboard(props) {
  const[sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }

  // const data = props.data;
  // const{user,login} = useContext(UserContext);
  // const[user,setUser] = useState();
//   const userEmail = user.email;
  
//   const userData = data.filter((user) => {
//     if (user.email === userEmail) {
//       return user;
//     }
//   });
//   const userObj =userData[0];
  
// //  login(userObj);

//   console.log("loginnnnnn",user)
  
  return(
    <div className='Dashboard'>
      <NavBar openSidebar={toggleSidebar}/>
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}/>
      <SideBar sidebar={sidebar}/>
    </div>


  )

  }