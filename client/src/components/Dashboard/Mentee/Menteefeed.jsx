import React from 'react';
import './Menteefeed.css';
import Dashboard from '../Dashboard';
import Searchbar from '../Searchbar/Searchbar';
import Grid from '../Grid/Grid';
import Quotes from '../Quotes/Quotes';
import Block from '../Block/Block';
import useApplicationData from "../../../hooks/useApplicationData.js";
import MentorList from '../Mentor/MentorList';

export default function Menteefeed(props) {
  const { state} = useApplicationData();
  return(
    <div className="menteefeed-wrapper">
    <Searchbar/>
    <Grid />
    <Quotes />
    <Block/>
    <Dashboard/>
    <MentorList mentors = {state.mentors}/>
    </div>
  )
}