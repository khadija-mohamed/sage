import React from "react";
import Dashboard from '../Dashboard';
import Searchbar from '../Searchbar/Searchbar';


export default function Booking() {
  return(
    <div className="booking">
    <Searchbar/>
    <Dashboard/>
    </div>
  )
}