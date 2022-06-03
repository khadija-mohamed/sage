import "./Mentordetail.css";
import { Link, useParams } from "react-router-dom";
import React from "react";
import Dashboard from "../Dashboard";

export default function Mentordetail(props) {
  let { mentorid } = useParams();

  const data = props.state.mentors;

  const newMentor = data.find((mentorObj) => {
    return mentorObj.id == mentorid;
  });

  return !newMentor ? (
    <div className="card">card</div>
  ) : (
    <div>
      <div>
      </div>
      <div className="whole-container">
      <Dashboard />
        <div className="card-wrapper10">
          <div className="card10">
            <div className="mentor-name-photo">
              <div className="mentor-detail-img">
                <img
                  className="detail-img"
                  src={newMentor.photo_url}
                  alt=""
                ></img>
              </div>
            </div>
            <div className="all-cards">
              <div className="mentor-name">
                <h3>
                  {newMentor.first_name} {newMentor.last_name}
                </h3>
              </div>
              <div className="card-descriptions">
                <div className="about-title">
                  <h3>About Me</h3>
                </div>
                <div className="about">
                  <p>{newMentor.description}</p>
                </div>
              </div>
              <div className="card-skills">
                <div className="skills-title">
                  <h3>Skills</h3>
                </div>
                <div className-="skills">
                  <p>{newMentor.skill}</p>
                </div>
              </div>
              <div className="card-location">
                <div className="skills-title">
                  <h3>Location</h3>
                </div>
                <div>
                  <p>{newMentor.location}</p>
                </div>
              </div>
              <div className="detail-button">
                <button className="button-52">
                  <Link to="/dashboard/booking">Contact Me</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
