import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { UserContext } from "../../UserContext";
import logo from "./logo.svg";

import NavBar from "../NavBar/NavBar";
import useApplicationData from "../../hooks/useApplicationData";

export default function Login(props) {
  // const { setIsLoggedIn, onUpdate } = props;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user,setUser] = useState("");
  
  const navigate = useNavigate();
  // console.log("loginnn mentees props",props.state.mentees)
  //mentees and mentors data
  const data = props.state;
  console.log("what is props.state",data.mentees)

  const { login } = useContext(UserContext);

  const { state } = useApplicationData();
  // console.log("what is user",user)
  // console.log("what is state",state.mentees)

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

// if -- err.response exist -- do in catch function, send unknown error otherwise .

    if (validateForm()) {
      axios
        .post(
          'http://localhost:8080/login/login',
          {
            email: email,
            password: password,
          },
          { withCredentials: true }
        )
        .then(() => {
          const menteeEmail = state.mentees.map((menteeEmails) => menteeEmails.email);
          const mentorEmail = state.mentors.map((mentorEmails) => mentorEmails.email);
          if (menteeEmail.includes(email.toLowerCase())) {
            navigate('/dashboard/mentee/menteefeed');
          }
          if (mentorEmail.includes(email.toLowerCase())) {
            navigate('/dashboard/mentor/mentorfeed');
          }
          const mentee = data.mentees.filter((user) => {
            if (user.email === email) {
              return user;
            }
          })
          console.log("heyy mentee",mentee)
          // const mentee = data.mentees.map((menteeEmail) => menteeEmail.email);
          const mentor = data.mentors.filter((user) => {
            if (user.email === email) {
              return user;
            }
          });
          console.log("what is mentor",mentor)
         // const mentor = data.mentors.map((mentorEmail) => mentorEmail.email);
          if (typeof mentee[0] === "object") {
            // console.log("mentee login",mentee)
            navigate('/dashboard/mentee/menteefeed');
            login(mentee[0]);
            // login(mentee.)
          } else if(typeof mentor[0] === "object") {
            navigate('/dashboard/mentor/mentorfeed');
            login(mentor[0]);
          }
        })
        .catch(err => {
          alert(err.response.data.message)     
        });
    }
  }

  return (
    <div>
      <NavBar />
      <div className="login-wrapper">
        <div className="orange-main">
          <div className="register-btn">
        <button className="button-52" type="submit"><Link to="/register"><span className="register-btn-text">Register</span></Link></button>
        </div>
          <div className="transparent-text"></div>
          <div className="sage-block">
            <div className="head-main">
              <span className="head-left"> S</span>
              <img className="o3" src={logo} alt="logo" />
              <span className="head-right">GE</span>
              <div className="login">
                {!email || !password ? (
                  <div>
                    <h4> Please enter email and password to proceed.</h4>
                  </div>
                ) : (
                  <h4>“The expert in anything was once a beginner.”</h4>
                )}
                <form onSubmit={handleSubmit} action="">
                  <input
                    type="text"
                    name=""
                    id="email"
                    placeholder="email"
                    className="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  ></input>
                  <input
                    type="password"
                    name=""
                    id="password"
                    placeholder="password"
                    className="pass"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  ></input>
                  <button
                    className="button-52"
                    type="submit"
                    // onClick={() => login(email)}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}