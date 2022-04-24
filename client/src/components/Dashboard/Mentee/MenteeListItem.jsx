import React from "react";
import "./MenteeListItem.scss";
export default function MenteeListItem({item}) {
 
  return (
    <div class="Booking">
      <div class="booking-container">
        <div class="card-container">

          <div class="card-wrapper">
            <div class="card dark"
            style={{backgroundImage:"{item?.photo_url}"}}
            >
              <img style={{height: "20em"}} src={item?.photo_url}></img>
          </div>
          <div class="text-overlay"></div>
            <h2>{item?.first_name} {item?.last_name}</h2>
          <div class="details-text">
            <span>{item?.description}</span>
            <span>{item?.skill}</span>
            <span>{item?.location}</span>
          </div>
          </div>
          <div class="purchase-button-container">
          <h2 class="back-h2">Team</h2>
          <div class="purchase-button dark">View Profile</div>
          </div>
        </div>
      </div>
     </div>
  );
}