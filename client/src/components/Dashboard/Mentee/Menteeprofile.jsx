import React, { useState,useContext } from 'react';
import logo from "./logo.svg"
import light from "./light.svg"
import './Menteeprofile.css';
import {Link} from 'react-router-dom';

import { UserContext } from '../../../UserContext';
import Dashboard from '../Dashboard';
import MenteeEditprofile from './MenteeEditprofile';


export default function Menteeprofile(props) {
  const data = props.state.mentees;

  const {user} = useContext(UserContext);

  const userEmail = user.email;
  const [modalOpen, setModalOpen] = useState(false);
  
 

  
    const userData = data.filter((user) => {
      if (user.email === userEmail) {
        return user;
      }
    });
   
  const userObj =userData[0];
  console.log("whatttt",userObj);
  // const menteeId = userObj.id;
   
  
 

  return(
    <div className="menteeprofile-wrapper">
     <Dashboard/>
     {/* <div className='mentee-profile'>
     <img className="person" src={logo} alt="logo"/>
     <div className="grid">
         <p>{user.email}</p>
     </div>
     <img className="light" src={light} alt="logo"/>
     <img className="light" src={light} alt="logo"/>
     <img className="light" src={light} alt="logo"/>
     <img className="light" src={light} alt="logo"/>
     <img className="light" src={light} alt="logo"/>
     </div>
    </div> */}
    <div className='card'>
      <div className="card_photo">
        <img src={userObj.photo_url} alt=""></img>
      </div>
        <h3>{userObj.first_name} {userObj.last_name}</h3>

      <div className="card_description">
        <p>{userObj.description}</p>

      </div>
      <div className="card_tag">
        <p>{userObj.skill}</p>

      </div>
      <div className="card_tag">
        <p>{userObj.location}</p>

      </div>

      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);

        }}
      >
        Edit profile
      </button>

      {modalOpen && <MenteeEditprofile setOpenModal={setModalOpen} key = {userObj.id} mentee = {userObj}/>}
    </div>

    </div>
   
  )
}