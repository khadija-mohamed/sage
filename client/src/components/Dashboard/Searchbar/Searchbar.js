import React, { useState } from "react";
import "./Searchbar.scss";

const Searchbar = (

  { locations, onNameFilter, onSkillFilter, onLocationFilter },
  item
) => {
  const [filters, setFilters] = useState({
    name: "",
    skill: "",
    location: "",
  });

  const handleInput = (field) => (event) => {
    event.preventDefault();
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

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
    }
  };

  // use handleFilter in form for form submission
  // const handleFilter = (event) => {
  //   event.preventDefault();
  //   const { value } = event.target;

  //   setFilters((field) => ({
  //     ...filters,
  //     [field]: value,
  //   }));
  // };

  return (
    <div className="row-my-5">
      <div className="col">
        <h4 className="border-bottom"></h4>
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="name">Search by Name</label>
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
        <label htmlFor="skill">Search by Skills</label>
        <input
          type="text"
          className="form-control"
          id="skill"
          onChange={handleInput("skill")}
        />
      </div>

      <div className="col-sm-12-my-2">
        <label htmlFor="location"> Search by location </label>
        <select
          className="form-control-button"
          id="location"
          onChange={handleInput("location")}
        >
          <option value=""> Select </option>
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