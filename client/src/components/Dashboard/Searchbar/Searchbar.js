// import React from 'react';
// import search from "./search.svg";
// import './Searchbar.css';
// import { useState } from 'react';

// export default function Searchbar() {
//   const{searchname, setSearch} = useState('');
//   const searchText = (event) =>{
//     setSearch(event.target.value);
//   }
//   let dataSearch = state.mentors.filter( item => {
//     return Object.keys(item).some(key => 
//       item[key].toString().toLowerCase().include(searchname.toString().toLowerCase()))

//   })
//   console.warn(searchname)
//   return(
//     <div className="search">
//     <img src={search} className="search-logo" alt="search" />
//     <input 
//       type="text"
//       id='input'
//       placeholder='Search By Name...' 
//       value={searchname}
//       onChange = {searchText.bind(this)}
//     />

    
//     </div>
//   )
// }


import { useState } from "react";

const Searchbar = ({
  locations,
  onNameFilter,
  onSkillFilter,
  onLocationFilter,
  
}, item) => {
  const [filters, setFilters] = useState({
    name: "",
    skill: "",
    location: "",
  });

  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });
    
    if(value) {
    switch (field) {
      case "name":
        onNameFilter(value);
        break;
      case "skill":
        onSkillFilter(value);
        break;
      case "location":
        onLocationFilter(value);
        break;
      default:
        break;
      
    }
  }
  };

  return (
    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom">Filters</h4>
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={filters.name}
          onChange={handleInput("name")}
        />
      </div>
      <div>
        <img src={item.photo}></img>
      </div>
      <div>
        <p>{item.description}</p>
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="skill">Skills</label>
        <input
          type="text"
          className="form-control"
          id="skill"
          onChange={handleInput("skill")}
        />
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="location">Location</label>
        <select
          className="form-control"
          id="location"
          onChange={handleInput("location")}
        >
          <option value="">Select</option>
          {locations.map((location) => (
            <option value={location} key={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      
    </div>
  );
};


export default Searchbar;