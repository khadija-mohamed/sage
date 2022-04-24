// import React from "react";

import "./Mentordetail.css";
import {Link, useParams} from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import Header from "../../NavBar/Header";
import Dashboard from "../Dashboard";



export default function Mentordetail(props) {
  
  const { mentorid} = useParams()
  
  const data = props.state.mentors;
  
  const newMentor = data.find(mentorObj => {
    
    return mentorObj.id == mentorid

  })
  
  

  return !newMentor ?(
    <div className='card'>card</div>
  )
   
  :   (
      <div>
      <div>
        <Dashboard/>
      </div>
      <div className='card'>
        <div className="card_photo">
           <img src={newMentor.photo_url} alt =''></img>
        </div>  
          <h3>{newMentor.first_name} {newMentor.last_name}</h3>

        <div className="card_description">
          <p>{newMentor.description}</p>
        </div>
        <div className="card_tag">
          <p>{newMentor.skill}</p>
        </div>
        <div className="card_tag">
          <p>{newMentor.location}</p>
        </div>

        <div>
          <button className="card_btn">Book my appointment</button>
        </div>
        <div>
          <button className="card_btn">Contact Me</button>
        </div>

      </div>
    </div>
  );  


}