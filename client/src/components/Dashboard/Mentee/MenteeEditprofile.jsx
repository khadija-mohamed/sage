import React, { useState,useContext } from 'react';
// import logo from "./logo.svg"
// import light from "./light.svg"
import './MenteeEditprofile.scss';
import {Link} from 'react-router-dom';

import { UserContext } from '../../../UserContext';

import logo from './logo.svg'
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";


import Dashboard from '../Dashboard';



export default function MenteeEditprofile(props) {
  
  // console.log("userObj",userObj)
  const { menteeId} = useParams()
  console.log("props.mentee",props.state.mentees,menteeId);
  


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

    // if (validateForm) {
  //     axios
  //       .post("http://localhost:8080/login/register/sage", {
  //         first_name: first_name,
  //         last_name: last_name,
  //         email: email,
  //         password: password,
  //         photo_url: photo_url,
  //         description: description,
  //         skill: skill,
  //       })
  //       .then(() => {
  //         navigate("/login");
  //       })
  //       .catch((err) => err);
  //   }
   };

  return (
    <div className="register-wrapper">
      <Dashboard />
      <div className="orange-main">
      <div className="transparent-text">
      </div>
      <div className="sage-block">
        <div className="head-main">
          <span className="head-left"> S</span>
          <img className="o3" src={logo} alt="logo"/>
          <span className="head-right">GE</span>
          <div className='login'>
          <h4> Please register as Sage to proceed.</h4>
          <form onSubmit={handleSubmit}>
        <label>
          <p>First Name</p>
          <input
            type="text"
            id="firstname"
            placeholder=''
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>
        <label>
          <p>Last Name</p>
          <input
            type="text"
            id="lastname"
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
        <label>
          <p>Email</p>
          <input
            type="email"
            id="sageemail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            id="sagepasswor"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <p>Confirm Password</p>
          <input type="password" id="confirm"/>
        </label>
        {/* <label>
          <p>Upload a Photo</p>
          <div className="imgbutton">
          <input type="file" id="img"/>
          </div>
        </label> */}
  
        <label>
          <p>About</p>
          <input
            type="text"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          <p>Skills</p>
          <input
            type="text"
            id="skill"
            onChange={(e) => setSkill(e.target.value)}
          />
         </label> 
        {/* <label className="button">
          {/* <div class="imgbutton">
          <input type="file" id="img"/>
          </div> */}
          {/* <input
            type="file"
            id="photourl"
            onChange={(e) => setPhotourl(e.target.value)}
          />
        </label> */} 
        <label  className="button">
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
          
        <button className="button-52" type="submit">Submit</button>
        </div>
      </form>
      </div>  
        </div>
      </div>
    </div>
    </div>
  );
}
