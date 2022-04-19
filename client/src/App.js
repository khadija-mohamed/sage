import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../src/components/Dashboard/Dashboard";
import Login from "../src/components/Login/Login";
import Register from "../src/components/Register/Register";
import Sage from "./components/Register/Sage";
import Sagee from "./components/Register/Sagee";



function App() {

  useEffect(() => {
    axios.get("http://localhost:8080/").then((response) => {
      console.log("Response:", response);
    });
  });

  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

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
              <ol> <a href="/login"> Login</a></ol>
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
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/register/sage" element={<Sage />}></Route>
            <Route path="/register/sagee" element={<Sagee />}></Route>

          </Routes>
        </BrowserRouter>
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
