import React from 'react';
import search from "./search.svg";
import './Searchbar.css';

export default function Searchbar() {
  return(
    <div className="search">
    <img src={search} className="search-logo" alt="search" />
    <input type="text" id='input' placeholder='Search...'></input>
    </div>
  )
}