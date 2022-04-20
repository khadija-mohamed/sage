import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../src/components/Dashboard/Dashboard";
import Login from "../src/components/Login/Login";
import Register from "../src/components/Register/Register";
import Sage from "./components/Register/Sage";
import Sagee from "./components/Register/Sagee";
import Menteefeed from "./components/Dashboard/Mentee/Menteefeed";
import Menteeprofile from "./components/Dashboard/Mentee/Menteeprofile"
import Menteefind from "./components/Dashboard/Mentee/Menteefind"
import Logout from "./components/Logout/Logout"
import Landing from "./components/Landing/Landing"
import Mentorconnect from "./components/Dashboard/Mentor/Mentorconnect"
import Mentorfeed from "./components/Dashboard/Mentor/Mentorfeed"
import Mentorprofile from "./components/Dashboard/Mentor/Mentorprofile"


function App() {

  useEffect(() => {
    axios.get("http://localhost:8080/").then((response) => {
      console.log("Response:", response);
    });
  });

  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div className="wrapper">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Sage </p>

    { true ?
          <div nav>
            <ul>
              <ol> About Us </ol>
              <ol> <a href="/login"> Login </a></ol>
              <ol> <a href="/register"> Register</a></ol>
            </ul>
          </div>
:
          <div nav>
            <ul>
              <ol> My Profile </ol>
            </ul>
          </div>

    }
        </header>
        <div className="main">
          <h1>Sage</h1>
        </div>
          <Routes>
            <Route path="/dashboard" index element={<Dashboard />}/>
            <Route path="/landing" element={<Landing />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/register/sage" element={<Sage />}/>
            <Route path="/register/sagee" element={<Sagee />}/>
            <Route path="/dashboard/menteefeed" element={<Menteefeed />}/>
            <Route path="/dashboard/menteeprofile" element={<Menteeprofile />}/>
            <Route path="/dashboard/menteefind" element={<Menteefind />}/>
            <Route path="/landing" element={<Logout />}/>
            <Route path="/dashboard/mentorconnect" element={<Mentorconnect />}/>
            <Route path="/dashboard/mentorfeed" element={<Mentorfeed />}/>
            <Route path="/dashboard/mentorprofile" element={<Mentorprofile />}/>
          </Routes>
        <footer className="footer">
          <ul>
            <ol> Follow Us </ol>
            <ol> Contact Us </ol>
            <ol> About Us </ol>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default App;