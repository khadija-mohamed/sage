import React from "react";
import "./MentorListItem.css";
import {Link} from 'react-router-dom';

export default function MentorListItem({item}) {
  const mentorid = item?.id;
 
  return (
    <div className='singlecard'>
      <div className="singlecard_photo">
        
      <img style={{height: "20em"}} src={item?.photo_url}></img>
      </div>
        
        <h3>{item?.first_name} {item?.last_name}</h3>

      <div className="singlecard_description">
        <p>{item?.description}</p>
      </div>
      <div className="singlecard_tag">
        <p>{item?.skill}</p>
      </div>
      <div className="singlecard_tag">
        <p>{item?.location}</p>
      </div>
      <div>
        
        <Link to={`/dashboard/mentee/mentordetail/${mentorid}`}>
          <button className="card_btn"
                  >view profile</button>
        </Link>
      </div>
    </div>
  );
}