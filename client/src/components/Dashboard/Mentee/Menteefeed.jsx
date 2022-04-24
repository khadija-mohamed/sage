import React, { useState,useContext } from 'react';
import './Menteefeed.css';

import Searchbar from '../Searchbar/Searchbar';

import Quotes from '../Quotes/Quotes';

<<<<<<< HEAD

import MentorListItem from '../Mentor/MentorListItem';
import Header from '../../NavBar/Header';
=======
// import React, { useContext } from 'react';
import MentorListItem from '../Mentor/MentorListItem';
import Header from '../../NavBar/Header';
import { UserContext } from '../../../UserContext';

>>>>>>> myprofile


export default function Menteefeed(props) {
  
  const data = props.state.mentors;
  const [allData, setData] = useState(data);
  
 
  const {user} = useContext(UserContext);
  
 console.log("hihih",user)
 console.log("what is props",props.user)
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

  const defaultData = () => {
    setData(data);
  }
  return (
   <div className='menteefeed'>
    <div>
      <Header/>
    </div>
    <div>
      <Quotes/>
    </div>
<<<<<<< HEAD
=======
    <h4>{user.email}</h4>
>>>>>>> myprofile
    <div className="menteefeed-wrapper"> 
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <Searchbar 
              locations={generateLocationDataForDropdown()}
              onNameFilter={handleFilterName}
              onSkillFilter={handleFilterSkill}
              onLocationFilter={handleFilterLocation}
               defaultData ={defaultData}
            />
          </div>
        
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
    </div>
  );
}