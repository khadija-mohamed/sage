// import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
// import axios from "axios";
// import React, { useState, useEffect } from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Dashboard from "../src/components/Dashboard/Dashboard";
import Login from "../src/components/Login/Login";
import Register from "../src/components/Register/Register";
import Sage from "./components/Register/Sage";
import Sagee from "./components/Register/Sagee";
import Menteefeed from "./components/Dashboard/Mentee/Menteefeed";
import Menteeprofile from "./components/Dashboard/Mentee/Menteeprofile"
import Menteefind from "./components/Dashboard/Mentee/Menteefind"
// import Logout from "./components/Logout/Logout"
import Landing from "./components/Landing/Landing"
// import Mentorconnect from "./components/Dashboard/Mentor/Mentorconnect"
import Mentorfeed from "./components/Dashboard/Mentor/Mentorfeed"
import Mentorprofile from "./components/Dashboard/Mentor/Mentorprofile"
import Mentordetail from "./components/Dashboard/Mentor/Mentordetail"
import Booking from "./components/Dashboard/Booking/Booking";
import useApplicationData from "./hooks/useApplicationData";
import Video from "./components/Video/Video";
// import Calendar from "./components/Calendar";
import {UserContext} from "./UserContext";
import { useState } from "react";


function App() {
  const { state} = useApplicationData();
  const [user, setUser] = useState({ email: '', auth: false });
  

  const login = (email) => {
    setUser((user) => ({
      email: email,
      auth: true,
    }));
  };

  const logout = () => {
    setUser((user) => ({
      email: '',
      auth: false,
    }));
  };

  
  return (
    <div>

           <UserContext.Provider value ={{user,login,logout}}> 
           <BrowserRouter>
            <Routes>
              <Route path="/dashboard" index element={<Dashboard />}/>
              <Route path="/" element={<Landing />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/register/sage" element={<Sage />}/>
              <Route path="/register/sagee" element={<Sagee />}/>
              <Route path="/dashboard/mentee/menteefeed" element={<Menteefeed state ={state}/>}/>
              <Route path="/dashboard/mentee/menteeprofile" element={<Menteeprofile state ={state}/>}/>
              <Route path="/dashboard/mentee/mentordetail/:mentorid" element={<Mentordetail state ={state}/>}/>
              <Route path="/dashboard/mentee/menteefind" element={<Menteefind />}/>
              {/* <Route path="/" element={<Logout />}/> */}
              {/* <Route path="/dashboard/mentor/mentorconnect" element={<Mentorconnect />}/> */}
              <Route path="/dashboard/mentor/mentorfeed" element={<Mentorfeed state ={state}/>} />
              <Route path="/dashboard/mentor/mentorprofile" element={<Mentorprofile />}/>
              <Route path="/dashboard/booking" element={<Booking state ={state}/>}/>
              <Route path="/dashboard/video" element={<Video />}/>
          
          
            </Routes>
            </BrowserRouter> 
          </UserContext.Provider>   
      </div>
  );
}
export default App;
