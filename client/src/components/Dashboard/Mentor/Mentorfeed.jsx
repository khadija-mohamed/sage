import React, { useState } from 'react';
import './Mentorfeed.css';
import MentorDashboard from '../MentorDashboard';
import Searchbar from '../Searchbar/Searchbar';
import cationData from "../../../hooks/useApplicationData.js";
import MenteeListItem from '../Mentee/MenteeListItem'
import useApplicationData from '../../../hooks/useApplicationData.js';

export default function Menteefeed(props) {

  const { state } = useApplicationData();

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
    <MentorDashboard />
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
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
    </div>
  );
}