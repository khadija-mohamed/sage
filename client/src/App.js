import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../src/components/Dashboard/Dashboard";
import Login from "../src/components/Login/Login";
import Register from "../src/components/Register/Register";

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
          <div nav>
            <ul>
              <ol> About Us </ol>
              <ol> Login </ol>
              <ol> Register </ol>
            </ul>
          </div>
        </header>
        <div className="main">
          <h1>Sage</h1>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
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
