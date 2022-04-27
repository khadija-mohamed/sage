// import React from "react";

import "./Menteedetail.css";
import {Link, useParams} from 'react-router-dom';
import React from 'react'; 
import Dashboard from "../Dashboard";



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
        <Dashboard />
      </div>

      <div className="whole-container">
        <div className="card-wrapper2">
          <div className="card2">
            <div className="mentee-name-photo">
              <div className="mentee-detail-img">
                <img className="detail-img" src={newMentee.photo_url} alt=""></img>
              </div>
            </div>
            <div className="all-cards">
              <div className="mentee-name">
                <h3>
                  {newMentee.first_name} {newMentee.last_name}
                </h3>
              </div>
              <div className="card-descriptions">
                <div className="about-title">
                  <h3>About Me</h3>
                </div>
                <div className="about">
                  <p>{newMentee.description}</p>
                </div>
              </div>
              <div className="card-skills">
                <div className="skills-title">
                  <h3>Skills</h3>
                </div>
                <div className-="skills">
                  <p>{newMentee.skill}</p>
                </div>
              </div>
              <div className="card-location">
                <div className="skills-title">
                  <h3>Location</h3>
                </div>
                <div>
                  <p>{newMentee.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}