import React, { useState } from "react";
import "./MenteeListItem.scss";
import { Link } from "react-router-dom";

export default function MenteeListItem({ item }) {
  const [isShown, setIsShown] = useState(false);
  const menteeid = item?.id;
  return (
    <div className="Booking-mentee">
      <div className="booking-container-mentee">
        <div className="card-container-mentee">
          <div className="card-wrapper-mentee">
            <div
              className="card-mentee dark-mentee"
              style={{ backgroundImage: "{item?.photo_url}" }}
            >
              <img
                style={{
                  height: "20em",
                  borderRadius: "10%",
                  boxShadow: "rgb(203 200 200) 10px 10px 8px",
                }}
                src={item?.photo_url}
              ></img>
            </div>
            <div className="text-overlay-mentee"></div>
            <h2>
              <b>
                {item?.first_name} {item?.last_name}
              </b>
            </h2>
            <div className="details-text-mentee">
              <span
                className="mentee-about"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                {!isShown
                  ? item?.description.length > 30
                    ? item?.description.substring(0, 29) + "..."
                    : item?.description
                  : isShown && <span>{item?.description}</span>}
              </span>
              <i
                className="mentee-skill"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                {!isShown
                  ? item?.skill.length > 30
                    ? item?.skill.substring(0, 29) + "..."
                    : item?.skill
                  : isShown && (
                      <i>
                        <b>{item?.skill}</b>
                      </i>
                    )}
              </i>
              <i className="mentee-location">
                <b>Location: </b>
                {item?.location}
              </i>
            </div>
          </div>
        </div>
        <div>
          <Link to={`/dashboard/mentor/menteedetail/${menteeid}`}>
            <button className="button-52">view profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
