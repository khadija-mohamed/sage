import React from 'react';
import './Mentorfeed.css';
import Dashboard from '../Dashboard';
import Searchbar from '../Searchbar/Searchbar';
import Grid from '../Grid/Grid';
import Filter from '../Filter/Filter';
import Block from '../Block/Block';
import useApplicationData from "../../../hooks/useApplicationData.js";
import MenteeList from '../Mentee/MenteeList';

export default function Mentorfeed() {
  const { state } = useApplicationData();
  return(
    <div className="mentorfeed-wrapper">
        <Searchbar/>
        <Grid />
        <Filter />
        <Block/>
        <Dashboard/>
        <h1>Meet the Sagees</h1>
        <MenteeList mentees = {state.mentees}/>
    </div>
  )
}