import React, { useState,useContext } from 'react';
import Searchbar from '../Searchbar/Searchbar';
// import React, { useContext } from 'react';
import MentorListItem from '../Mentor/MentorListItem';
import './Menteefeed.css';
import { UserContext } from '../../../UserContext';
import Dashboard from '../Dashboard';



export default function Menteefeed(props) {
  
  const data = props.state.mentors;
  const [allData, setData] = useState(data);
  
 
  // const {user} = useContext(UserContext);
  // const allData = Data.filter((user) => {
  //   if (user.isactive === true) {
  //     return user;
  //   }
  // })

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
  <div>
  
  <Dashboard />
  <div className="menteefeed-wrapper"> 
    {/* <div className="container">
      <div className="row"> */}
        <div className="col-sm-3">
        <Searchbar 
            locations={generateLocationDataForDropdown()}
            onNameFilter={handleFilterName}
            onSkillFilter={handleFilterSkill}
            onLocationFilter={handleFilterLocation} 
          /> 
        </div>
        <div className="col-sm-9">
      {/* { allData.length === 0 ? */}
        <div className="mentor-container">
            {allData.map((item) => (
              <MentorListItem item={item} key={item.id} />
            ))}
          </div>
      {/* : */}
          {/* <div className="mentor-container">
            {allData.map((item) => (
              <MentorListItem item={item} key={item.id} />
            ))}
          </div> */}
      {/* } */}
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
}