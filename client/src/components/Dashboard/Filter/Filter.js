import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Filter.css';

export default function Filter() {
  const [state, setState] = useState({
    menteeList: {},
  })

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (true) {
      axios.post(
        'http://localhost:8080/filter/dashboard/mentee/menteefind'
      ).then(() => {
        navigate('/dashboard/mentee/menteefind');
      }).catch(err => err);
    }
  }

    useEffect(() => {
      Promise.all([
        axios.get('http://localhost:8080/filter/dashboard/mentee/menteefind')
      ]).then((all) => {
        setState((prev) => ({
          ...prev,
          menteeList: all[0].data,
        }));
        // navigate('/users/filter');
    });
    }, []);

  return (
    <div class="filter">
      <form id="filter_form" onSubmit={handleSubmit}>
        <input id="filter_input" type="text" name="skill" placeholder="Enter a skill"></input>
      <div>
        <button id="filter_button" type="submit">Filter</button>
      </div>
      </form>
    </div>
  )
}