import React, { useState, useContext } from "react";
import "./Menteeprofile.css";
import { UserContext } from "../../../UserContext";
import Dashboard from "../Dashboard";
import { Grid } from "@mui/material";
import MenteeEditprofile from "./MenteeEditprofile";
import Sagecarousel from "../Modal/carosel";
import OutlinedCard from "../Modal/card";
import Spotify from "../Modal/spotify";
import NotePad from "../Modal/Notepad";

export default function Menteeprofile(props) {
  const { user } = useContext(UserContext);

  const [modalOpen, setModalOpen] = useState(false);
  const userObj = user;

  return (
    <div className="menteeprofile-wrapper">
      <Dashboard />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <div className="card-wrapper2">
            <div className="card2">
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
              <div className="card_description">
                <p>{userObj.description}</p>
              </div>
              <div className="card_tag">
                <p>{userObj.skill}</p>
              </div>
              <div className="card_tag">
                <p>{userObj.location}</p>
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
                {modalOpen && (
                  <MenteeEditprofile
                    setOpenModal={setModalOpen}
                    key={userObj.id}
                    mentee={userObj}
                  />
                )}
              </div>
              <OutlinedCard />
            </div>
          </div>
        </Grid>
        <iframe
          src="https://feed.mikle.com/widget/v2/154449/?preloader-text=Loading"
          height="409px"
          width="450px"
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
