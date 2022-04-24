import React from "react";
import "./MentorListItem.scss";
import {Link} from 'react-router-dom';

export default function MentorListItem({item}) {
  const mentorid = item?.id;

 
  return (
    <div class="Booking">
      <div class="booking-container">
        <div class="card-container">

          <div class="card-wrapper">
            <div class="card dark"
<<<<<<< HEAD
            style={{backgroundImage:"{item?.photo_url}"}}>
=======
            style={{backgroundImage:"{item?.photo_url}"}}
            >
              
>>>>>>> f505d8e593e08aea055f6fe484397e7802050625
              <img style={{height: "20em"}} src={item?.photo_url}></img>
            </div>
            <div class="text-overlay"></div>
            <h2>{item?.first_name} {item?.last_name}</h2>
<<<<<<< HEAD
          <div class="details-text">
            <span>{item?.description}</span>
            <span>{item?.skill}</span>
            <span>{item?.location}</span>
            <div class="button-52">View Profile</div>
          </div>
          </div>
          <div class="purchase-button-container">
=======
            <div class="details-text">
              <span>{item?.description}</span>
              <span>{item?.skill}</span>
              <span>{item?.location}</span>
            </div>
          </div>
        </div>  
          
          <div >
            <Link to={`/dashboard/mentee/mentordetail/${mentorid}`}>
          <button className="button-52"
                  >view profile</button>
        </Link></div>
>>>>>>> f505d8e593e08aea055f6fe484397e7802050625
          </div>
        </div>
   
    
  );
}



