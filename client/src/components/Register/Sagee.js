import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Sagee.css";

export default function Sagee() {
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
        .post("http://localhost:8080/login/register/sagee", {
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
      <h1>Welcome to Sage</h1>
      <small> Hello Future Sagee! </small>
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
          <input
            type="password"
            id="input"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
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
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}