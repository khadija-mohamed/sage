import React, { useState } from "react";
import logo from './logo.svg'
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Sage.css";
import NavBar from "../NavBar/NavBar";

export default function Sage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [photo_url, setPhotourl] = useState("");
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
        .post("http://localhost:8080/login/register/sage", {
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
          photo_url: photo_url,
          description: description,
          skill: skill,
        })
        .then(() => {
          navigate("/login");
        })
        .catch((err) => err);
    }
  };

  return (
    <div className="register-wrapper">
      <NavBar />
      <div className="orange-main">
      <div className="transparent-text">
      </div>
      <div className="sage-block">
        <h1 className="head-main">
          <span className="head-left"> S</span>
          <img className="o3" src={logo} alt="logo"/>
          <span className="head-right">GE</span>
          <h4> Please register as Sage to proceed.
          <form onSubmit={handleSubmit}>
        <label>
          <p>First Name</p>
          <input
            type="text"
            id="input"
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>
        <label>
          <p>Last Name</p>
          <input
            type="text"
            id="input"
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
        <label>
          <p>Email</p>
          <input
            type="email"
            id="input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            id="input"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <p>Confirm Password</p>
<<<<<<< HEAD
          <input
            type="password"
            id="input"
            onChange={(e) => setPassword(e.target.value)}
          />
=======
          <input type="password" id="input"/>
        </label>
        <label>
          <p>Upload a Photo</p>
          <div className="imgbutton">
          <input type="file" id="img"/>
          </div>
>>>>>>> myprofile
        </label>
  
        <label>
          <p>About</p>
          <input
            type="text"
            id="input"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          <p>Skills</p>
          <input
            type="text"
            id="input"
            onChange={(e) => setSkill(e.target.value)}
          />
        </label>
        <label for="file" class="button">
          {/* <div class="imgbutton">
          <input type="file" id="img"/>
          </div> */}
          <input
            type="file"
            id="input"
            onChange={(e) => setPhotourl(e.target.value)}
          />
        </label>
        <label for="file" class="button">
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
          <div></div>
        <button class="button-52" type="submit">Submit</button>
        </div>
      </form>
      </h4>  
        </h1>
      </div>
    </div>
    </div>
  );
}
