import React, { useState } from "react";
import logo from "./logo.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Sagee.css";
import NavBar from "../NavBar/NavBar";

export default function Sagee() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [photo_url, setPhotourl] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [skill, setSkill] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email) {
      setError("Email cannot be blank");
      return false;
    }
    setError("");
    if (!password) {
      setError("Password cannot be blank");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm) {
      axios
        .post("http://localhost:8080/login/register/sagee", {
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
          photo_url: photo_url,
          location: location,
          description: description,
          skill: skill,
        })
        .then(() => {
          navigate("/login");
        })
        .catch((err) => {
          if (err.response) {
            alert(err.response.data.message);
          }
        });
    }
  };

  return (
    <div className="register-wrapper">
      <NavBar />
      <div className="orange-main">
        <div className="transparent-text"></div>
        <div className="sage-block">
          <h1 className="head-main">
            <span className="head-left"> S</span>
            <img className="o3" src={logo} alt="logo" />
            <span className="head-right">GE</span>
            <div className="login">
              <h4> Please register as a Sagee to proceed.</h4>
              <form onSubmit={handleSubmit}>
                <label>
                  <p>First Name</p>
                  <input
                    type="text"
                    id="first_name"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </label>
                <label>
                  <p>Last Name</p>
                  <input
                    type="text"
                    id="last_name"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </label>
                <label>
                  <p>Email</p>
                  <input
                    type="email"
                    id="sageeemail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label>
                  <p>Password</p>
                  <input
                    type="password"
                    id="sageepassword"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <label>
                  <p>Confirm Password</p>
                  <input
                    type="password"
                    id="confirmsagee"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <label>
                  <p>Location</p>
                  <input
                    type="text"
                    id="input"
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </label>
                <label>
                  <p>About</p>
                  <input
                    type="text"
                    id="aboutme"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </label>
                <label>
                  <p>Skills</p>
                  <input
                    type="text"
                    id="sageeskill"
                    onChange={(e) => setSkill(e.target.value)}
                  />
                </label>
                <label className="button">
                  <p>Upload a Photo</p>
                  {/* <div class="imgbutton">
          <input type="file" id="img"/>
          </div> */}
                  <input
                    type="text"
                    id="input"
                    onChange={(e) => setPhotourl(e.target.value)}
                  />
                </label>
                <div>
                  <button className="button-52" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}
