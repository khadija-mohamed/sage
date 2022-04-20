import React from 'react';
import Dashboard from '../Dashboard';
import Searchbar from '../Searchbar/Searchbar';
import Grid from '../Grid/Grid';
import Quotes from '../Quotes/Quotes';
import Block from '../Block/Block';

export default function Menteefind() {
  return(
    <div className="menteefind-wrapper">
    <Searchbar/>
    <Grid />
    <Quotes />
    <Block/>
    <Dashboard/>
    </div>
  )
}