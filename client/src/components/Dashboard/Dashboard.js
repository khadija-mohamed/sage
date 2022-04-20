import React from 'react';
import logo from "./logo.svg";

import './Dashboard.css';

export default function Dashboard() {
  return(
    <div className='sidebar'>
    <img src={logo} className="logo" alt="logo" />
      <div nav>
      <h1>Sage</h1>
          <ul>
          <form method="get" action="/dashboard/menteeprofile"><button id="dashboard-button" type="submit">My Profile</button></form>
          <form method="get" action="/dashboard/menteefeed"><button id="dashboard-button" type="submit">Feed</button></form>
          <form method="get" action="/dashboard/menteefind"><button id="dashboard-button" type="submit">Find a Sage</button></form>
          <form method="get" action="/"><button type="submit" id="dashboard-button" >Logout</button></form>
            </ul>
          </div> 
    </div>
  );

  }