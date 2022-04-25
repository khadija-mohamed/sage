import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Logout.css";
import logo from "../../logo.svg";

export default function Logout(props) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/login/logout")
      .then(() => {
        navigate("/");
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
