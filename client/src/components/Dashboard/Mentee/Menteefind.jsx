import React from 'react';
import Dashboard from '../Dashboard';
import Searchbar from '../Searchbar/Searchbar';
import Grid from '../Grid/Grid';
import Quotes from '../Quotes/Quotes';
import Filter from '../Filter/Filter';
import Block from '../Block/Block';
import useApplicationData from "../../../hooks/useApplicationData.js";
import MentorList from '../Mentor/MentorList';

export default function Menteefind() {
  const { state} = useApplicationData();
  return(
    <div className="menteefind-wrapper">
    <Searchbar/>
    <Grid />
    <Quotes />
    <Filter />
    <Block/>
    <Dashboard/>
    <MentorList mentors = {state.mentors}/>
    </div>
  )
}