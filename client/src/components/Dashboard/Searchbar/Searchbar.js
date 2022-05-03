/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";
import "./Searchbar.scss";

const Searchbar = ({
  locations,
  onNameFilter,
  onSkillFilter,
  onLocationFilter,
}) => {
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
  };

  const resetInput = (e) => {
    e.target.value = "";
  };

  return (
    <div className="row-my-5">
      <div className="col"></div>
      <div className="col-sm-12my-2">
        <header>Filter</header>

        <label htmlFor="name">
          <i class="fa-solid fa-magnifying-glass"></i>Search by Name
        </label>
        <input
          type="text"
          className="searchbar-input"
          id="name"
          onChange={handleInput("name")}
          onBlur={(e) => resetInput(e)}
        />
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="skill">
          {" "}
          <i class="fa-solid fa-magnifying-glass"></i>Search by Skills
        </label>
        <input
          type="text"
          className="searchbar-input"
          id="skill"
          onChange={handleInput("skill")}
          onBlur={(e) => resetInput(e)}
        />
      </div>

      <div className="col-sm-12-my-2">
        <label htmlFor="location">
          {" "}
          <i class="fa-solid fa-magnifying-glass"></i>Search by Location{" "}
        </label>
        <select
          className="form-control-button"
          id="location"
          onChange={handleInput("location")}
          onBlur={(e) => resetInput(e)}
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
