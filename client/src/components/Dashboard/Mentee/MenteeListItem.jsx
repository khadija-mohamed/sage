import React from "react";
import "./MenteeListItem.scss";
import {Link} from 'react-router-dom';

export default function MenteeListItem({item}) {
  const menteeid = item?.id;
  return (
    <div className="Booking">
      <div className="booking-container">
        <div className="card-container">

          <div className="card-wrapper">
            <div className="card dark"
            style={{backgroundImage:"{item?.photo_url}"}}
            >
              <img style={{height: "20em"}} src={item?.photo_url}></img>
          </div>
          <div className="text-overlay"></div>
            <h2>{item?.first_name} {item?.last_name}</h2>
          <div className="details-text">
            <span>{item?.description}</span>
            <span>{item?.skill}</span>
            <span>{item?.location}</span>
          </div>
          </div>
         </div> 
          <div >
            <Link to={`/dashboard/mentor/menteedetail/${menteeid}`}>
          <button className="button-52"
                  >view profile</button>
        </Link></div>
          </div>
        </div>
   
  );
}