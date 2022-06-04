import React, { useState, useContext } from "react";
import "./Mentorprofile.scss";
import { UserContext } from "../../../UserContext";
import MentorDashboard from "../MentorDashboard";
import { Grid } from "@mui/material";
import MentorEditprofile from "./MentorEditprofile";
import Sagecarousel from "../Modal/carosel";
import OutlinedCard from "../Modal/card";
import Spotify from "../Modal/spotify";
import NotePad from "../Modal/Notepad";

export default function Mentorprofile() {
  const { user } = useContext(UserContext);
  const [modalOpen, setModalOpen] = useState(false);
  const userObj = user;

  return (
    <div className="menteeprofile-wrapper">
      <MentorDashboard />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <div className="card-wrapper2">
            <div className="card2">
              <div className="profile-details">
                <div className="card_photo">
                  <img
                    style={{
                      height: "30em",
                      borderRadius: "10%",
                      boxShadow: "rgb(203 200 200) 10px 10px 8px",
                      marginLeft: "60px",
                    }}
                    src={userObj.photo_url}
                    alt=""
                  ></img>
                </div>
                <h3 className="profile-name">
                  {userObj.first_name} {userObj.last_name}
                </h3>
                <div className="profile-text-container">
                  <div className="card_description">
                    <div>
                      <p>About Me: </p>
                    </div>
                    <div>
                      <span>{userObj.description}</span>
                    </div>
                  </div>
                  <div className="card_tag">
                    <div>
                      <p>Skills: </p>
                    </div>
                    <div>
                      <span>{userObj.skill}</span>
                    </div>
                  </div>
                  <div className="card_tag">
                    <div>
                      <p>Location: </p>
                    </div>
                    <div>
                      <span>{userObj.location}</span>
                    </div>
                  </div>
                </div>
                <div className="outlinecard">
                  <div className="edit-button">
                    <div className="register-btn">
                      <button
                        className="button-52"
                        onClick={() => {
                          setModalOpen(true);
                        }}
                      >
                        Edit profile
                      </button>
                    </div>
                  </div>
                </div>
                {modalOpen && (
                  <MentorEditprofile
                    setOpenModal={setModalOpen}
                    key={userObj.id}
                    mentor={userObj}
                  />
                )}
              </div>
              {/* <OutlinedCard /> */}
            </div>
          </div>
        </Grid>
        <iframe
          src="https://feed.mikle.com/widget/v2/155112/?preloader-text=Loading"
          height="450px"
          width="30%"
          class="fw-iframe"
          scrolling="no"
          frameborder="0"
        ></iframe>

        <Sagecarousel className="carouselcontainer" />
        <div className="notepad">
          <NotePad />
        </div>
        <div className="spotify">
          <Spotify />
        </div>
      </Grid>
    </div>
  );
}
