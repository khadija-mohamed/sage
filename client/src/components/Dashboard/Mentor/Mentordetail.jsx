// import React from "react";

import "./Mentordetail.css";
import {Link, useParams} from 'react-router-dom';
import React from 'react'; 
import Dashboard from "../Dashboard";
import Sagecarousel from '../Modal/carosel';



export default function Mentordetail(props) {
  
  const { mentorid} = useParams();
  
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
    <div className="card-wrapper2">
    <Sagecarousel />
      <div className='card2'>
        <div className="card_photo2">
           <img src={newMentor.photo_url} alt =''></img>
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
        <div className="buttons">
          <button className="button-52"><Link to="/dashboard/booking">Contact Me</Link></button>
            </div>  
            </div>   
      </div>
      </div>
    </div>
  );  


}