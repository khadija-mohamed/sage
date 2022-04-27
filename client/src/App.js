// import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
// import axios from "axios";
// import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../src/components/Dashboard/Dashboard";
import Login from "../src/components/Login/Login";
import Register from "../src/components/Register/Register";
import Sage from "./components/Register/Sage";
import Sagee from "./components/Register/Sagee";
import Menteefeed from "./components/Dashboard/Mentee/Menteefeed";
import Menteeprofile from "./components/Dashboard/Mentee/Menteeprofile";
import Menteefind from "./components/Dashboard/Mentee/Menteefind";
import Logout from "../src/components/Logout/Logout"
import Landing from "./components/Landing/Landing";
import Mentorfeed from "./components/Dashboard/Mentor/Mentorfeed";
import Mentorprofile from "./components/Dashboard/Mentor/Mentorprofile";
import Mentordetail from "./components/Dashboard/Mentor/Mentordetail";
import Booking from "./components/Dashboard/Booking/Booking";
import useApplicationData from "./hooks/useApplicationData";
import Video from "./components/Video/Video";
import MenteeEditprofile from "./components/Dashboard/Mentee/MenteeEditprofile";
import MentorEditprofile from "./components/Dashboard/Mentor/MentorEditprofile";
import Menteedetail from "./components/Dashboard/Mentee/Menteedetail";
import About from "./components/About/About";
// import Calendar from "./components/Calendar";
import { UserContext } from "./UserContext";
import { useState } from "react";

function App() {
  const { state} = useApplicationData();
  // const mentorsData = state.mentors;
  // const menteesData = state.mentees;
  // const data = mentorsData.concat(menteesData);

  const [user, setUser] = useState({ id:'',first_name:'', last_name: ' ',email: '', location:'', skill:'', description:'',isactive:true, photo_url:'',auth: false });

  // const [user, setUser] = useState({ email: '',auth:false})
  const login = (data) => {
    setUser((user) => ({
      id:data.id,
      first_name:data.first_name,
      last_name:data.last_name,
      email:data.email,
      location: data.location,
      skill:data.skill,
      description:data.description,
      isactive:data.isactive,
      photo_url:data.photo_url,
      auth: true,
    }));
  };
  const update = (data) => {
    setUser((user) => ({
      first_name:data.first_name,
      last_name:data.last_name,
      email:data.email,
      location: data.location,
      skill:data.skill,
      description:data.description,
      isactive:data.isactive,
      photo_url:data.photo_url,
      auth: true,
    }));
  };

  const logout = (data) => {
    setUser(() => ({
      id:data,
      first_name:data,
      last_name:data,
      email:data,
      location: data,
      skill:data,
      description:data,
      isactive:true,
      photo_url:data,
      auth: false,
    }));
  };

  return (
    <div className="index">

      <UserContext.Provider value={{ user, login, logout ,update}}>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" index element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login state={state}/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/register/sage" element={<Sage />} />
            <Route path="/register/sagee" element={<Sagee />} />
            <Route
              path="/dashboard/mentee/menteefeed"
              element={<Menteefeed state={state} />}
            />
            <Route
              path="/dashboard/mentee/menteeprofile"
              element={<Menteeprofile state={state} />}
            />
            <Route
              path="/dashboard/mentee/menteeprofile/editprofile/:menteeid"
              element={<MenteeEditprofile state={state} />}
            />
            <Route
              path="/dashboard/mentee/mentordetail/:mentorid"
              element={<Mentordetail state={state} />}
            />
            <Route
              path="/dashboard/mentor/menteedetail/:menteeid"
              element={<Menteedetail state={state} />}
            />
            <Route
              path="/dashboard/mentee/menteefind"
              element={<Menteefind />}
            />
            <Route path="/logout" element={<Logout />}/>
            <Route
              path="/dashboard/mentor/mentorfeed"
              element={<Mentorfeed state={state} />}
            />
            <Route
              path="/dashboard/mentor/mentorprofile"
              element={<Mentorprofile state={state}/>}
            />
            <Route
              path="/dashboard/mentor/mentorprofile/editprofile/:mentorid"
              element={<MentorEditprofile state={state} />}
            />
            <Route
              path="/dashboard/booking"
              element={<Booking state={state} />}
            />
            <Route path="/dashboard/video" element={<Video />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}
export default App;
