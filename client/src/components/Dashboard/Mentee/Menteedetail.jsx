// import React from "react";

import "./Menteedetail.css";
import {Link, useParams} from 'react-router-dom';
import React from 'react'; 
import Dashboard from "../Dashboard";
import Sagecarousel from '../Modal/carosel';



export default function Menteedetail(props) {
  
  const { menteeid} = useParams();
  
  const data = props.state.mentees;
  
  const newMentee = data.find(menteeObj => {
    
    return menteeObj.id == menteeid

  })
  
  

  return !newMentee ?(
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
           <img src={newMentee.photo_url} alt =''></img>
          <h3>{newMentee.first_name} {newMentee.last_name}</h3>

        <div className="card_description">
          <p>{newMentee.description}</p>
        </div>
        <div className="card_tag">
          <p>{newMentee.skill}</p>
        </div>
        <div className="card_tag">
          <p>{newMentee.location}</p>
        </div>
        
      </div>   
    </div>
    </div>
  </div>
  );  


}