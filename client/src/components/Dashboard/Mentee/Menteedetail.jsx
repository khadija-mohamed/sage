import "./Menteedetail.css";
import { useParams } from "react-router-dom";
import React from "react";
import MenteeDetailsNavBar from "../../NavBar/MenteeDetailsNavBar";

export default function Menteedetail(props) {
  let { menteeid } = useParams();
  const data = props.state.mentees;
  const newMentee = data.find((menteeObj) => {
    return menteeObj.id == menteeid;
  });

  return !newMentee ? (
    <div className="card">card</div>
  ) : (
    <div>
      <div>
      <MenteeDetailsNavBar />
      </div>
      <div className="whole-container">
        <div className="card-wrapper10">
          <div className="card10">
            <div className="mentee-name-photo">
              <div className="mentee-detail-img">
                <img
                  className="detail-img"
                  src={newMentee.photo_url}
                  alt=""
                ></img>
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
