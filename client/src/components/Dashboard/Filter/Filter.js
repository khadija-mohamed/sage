import React from 'react';
import './Filter.css';

export default function Filter() {
  return (
    <div class="filter">
      <input id="filter_input" type="text" name="skill" placeholder="Enter a skill"></input>
      <div>
        <button class="filter_button">Filter</button>
      </div>
    </div>
  )
}