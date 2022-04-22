import React, { useState } from 'react';
import Header from '../NavBar/Header';

import './Dashboard.css';



// export default function Dashboard() {
//   const[sidebar, setSidebar] = useState(false);
//   const toggleSidebar = () => {
//     setSidebar((prevState) => !prevState)
//   }
//   return(
//     <div className='Dashboard'>
//       <NavBar openSidebar={toggleSidebar}/>
//       <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}/>
//       <SideBar sidebar={sidebar}/>
//     </div>


//   )

//   }


export default function Dashboard() {
 
  
  return(
    <Header/>
 
  )
  }
