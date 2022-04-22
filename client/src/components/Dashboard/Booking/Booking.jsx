import React from "react";
import Dashboard from '../Dashboard';
import Searchbar from '../Searchbar/Searchbar';
// import Calendar from "../../Calendar";


export default function Booking() {
  return(
    <div className="booking">
    <Searchbar/>
    <Dashboard/>
    {/* <Calendar /> */}
    
    </div>
  )
}