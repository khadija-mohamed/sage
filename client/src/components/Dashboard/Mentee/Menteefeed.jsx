import React, { useState } from 'react';
import './Menteefeed.css';
import Dashboard from '../Dashboard';
import Searchbar from '../Searchbar/Searchbar';
import Grid from '../Grid/Grid';
import Quotes from '../Quotes/Quotes';
import Block from '../Block/Block';
import useApplicationData from "../../../hooks/useApplicationData.js";
import MentorList from '../Mentor/MentorList';
import MentorListItem from '../Mentor/MentorListItem';

// export default function Menteefeed(props) {
//   const { state,setState} = useApplicationData();
  
//   return(
//     <div className="menteefeed-wrapper">
    
//     <Grid />
//     <Quotes />
//     <Block/>
//     <Dashboard/>
//     <MentorList mentors = {state.mentors} setMentor ={setState}/>
//     </div>
//   )
// }
export default function Menteefeed(props) {
  const { state} = useApplicationData();
  const data = state.mentors;
  const [allData, setData] = useState(data);
  console.log("props",props)
  console.log("state.mentors",state.mentors)

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
    <div className="menteefeed-wrapper"> 
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
        <Quotes />
        <div className="col-sm-9">
          <div className="row mt-5">
            {allData.map((item) => (
              <MentorListItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );

}
