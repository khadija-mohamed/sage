import React from 'react';
import './Mentorfeed.css';
import MentorDashboard from '../MentorDashboard';
import Searchbar from '../Searchbar/Searchbar';
import Filter from '../Filter/Filter';
import useApplicationData from "../../../hooks/useApplicationData.js";
import MenteeList from '../Mentee/MenteeList';

export default function Mentorfeed() {
  const { state } = useApplicationData();
  return(
    <div className="mentorfeed-wrapper">
        <Searchbar/>
        <Filter />
        <MentorDashboard/>
        <h1>Meet the Sagees</h1>
        <MenteeList mentees = {state.mentees}/>
    </div>
  )
}