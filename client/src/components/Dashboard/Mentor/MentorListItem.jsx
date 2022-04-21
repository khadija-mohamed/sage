import React from "react";

import "./MentorListItem.css";

export default function MentorListItem(props) {
 

  return (
    <div className='card'>
      <div className="card_photo">
        <img src={props.photo}></img>
      </div>
        <h3>{props.firstname} {props.lastname}</h3>
      
      <div className="card_description">
        <p>{props.description}</p>
        
      </div>
      <div className="card_tag">
        <p>{props.skill}</p>
        
      </div>
      <div className="card_tag">
        <p>{props.location}</p>
        
      </div>
        
      <div>
        <button className="card_btn">view profile</button>
      </div>
      
    </div>
  );
}