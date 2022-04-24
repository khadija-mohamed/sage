import React from 'react';
import Dashboard from '../Dashboard';
import Searchbar from '../Searchbar/Searchbar';
import Filter from '../Filter/Filter';
import useApplicationData from "../../../hooks/useApplicationData.js";
import MentorList from '../Mentor/MentorList';

export default function Menteefind() {
  const { state} = useApplicationData();
  return(
    <div className="menteefind-wrapper">
    <Searchbar/>
    <Filter />
    <Dashboard/>
    <MentorList mentors = {state.mentors}/>
    </div>
  )
}