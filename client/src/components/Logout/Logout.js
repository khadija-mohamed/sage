
import axios from "axios";
import React, { useState,useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom";
import "./Logout.css";
import logo from "../../logo.svg";
import { UserContext } from "../../UserContext";

export default function Logout(props) {
  const navigate = useNavigate();
  const {logout} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/login/logout")
      .then(() => {
        navigate("/");
        logout();
      })
      .catch((err) => err);
  };

  return (
    <div>
      <i className="logout-msg">You have successfully logged out.</i>
      <img className="logout-logo" src={logo} alt="logo"/>
      <form onSubmit={handleSubmit}>
        <div>
          <button className="button-52" type="submit"><Link to="/">
            Homepage</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
