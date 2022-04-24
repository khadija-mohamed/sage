import React, { useState } from 'react';
import './Mentorfeed.css';
import Dashboard from '../Dashboard';
import Searchbar from '../Searchbar/Searchbar';
<<<<<<< HEAD
import Filter from '../Filter/Filter';
=======
>>>>>>> f505d8e593e08aea055f6fe484397e7802050625
import useApplicationData from "../../../hooks/useApplicationData.js";
import MenteeListItem from '../Mentee/MenteeListItem'

export default function Menteefeed(props) {

  const { state } = useApplicationData();
<<<<<<< HEAD
  return(
    <div className="mentorfeed-wrapper">
        <Searchbar/>
        <Filter />
        <MentorDashboard/>
        <h1>Meet the Sagees</h1>
        <MenteeList mentees = {state.mentees}/>
=======

  console.log("State:", state.mentees);
  
  const data = state.mentees;
  const [allData, setData] = useState(data);

  const generateLocationDataForDropdown = () => {
    return [...new Set(data.map((item) => item.location))];
  };

  const handleFilterName = (name) => {
    const filteredData = data.filter((item) => {
      const fullName = `${item.first_name} ${item.last_name}`;
      if (fullName.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterSkill = (skill) => {
    const filteredData = data.filter((item) => {
      if (item.skill.toLowerCase().includes(skill.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterLocation = (location) => {
    const filteredData = data.filter((item) => {
      if (item.location === location) {
        return item;
      }
    });

    setData(filteredData);
  };  

  return (
    <div className="mentorfeed-wrapper"> 
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
         <Dashboard />
         <Searchbar 
            locations={generateLocationDataForDropdown()}
            onNameFilter={handleFilterName}
            onSkillFilter={handleFilterSkill}
            onLocationFilter={handleFilterLocation} 
          /> 
        </div>
        <div className="col-sm-9">
      { allData.length === 0 ?
        <div className="mentee-container">
            {data.map((item) => (
              <MenteeListItem item={item} key={item.id} />
            ))}
          </div>
      :
          <div className="mentee-container">
            {allData.map((item) => (
              <MenteeListItem item={item} key={item.id} />
            ))}
          </div>
      }
        </div>
      </div>
    </div>
>>>>>>> f505d8e593e08aea055f6fe484397e7802050625
    </div>
  );
}