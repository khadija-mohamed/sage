import React from 'react';
import Dashboard from '../Dashboard';
import Searchbar from '../Searchbar/Searchbar';
import Grid from '../Grid/Grid';
import Quotes from '../Quotes/Quotes';
import Filter from '../Filter/Filter';
import Block from '../Block/Block';

export default function Menteefind() {
  return(
    <div className="menteefind-wrapper">
    <Searchbar/>
    <Grid />
    <Quotes />
    <Filter />
    <Block/>
    <Dashboard/>
    </div>
  )
}