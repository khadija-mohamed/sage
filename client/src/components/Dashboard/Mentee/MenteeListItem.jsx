import React from "react";

import "./MenteeListItem.css";

export default function MenteeListItem(props) {
 
  return (
    <div className='card'>
      <div className="card_photo">
        <img src={props.photo_utl} alt=""/>
      </div>
        <h3>{props.first_name} {props.last_name}</h3>
      
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