import React, { useState,useContext } from 'react';
import logo from "./logo.svg"
import light from "./light.svg"
import './Menteeprofile.css';
import Header from '../../NavBar/Header';
import { UserContext } from '../../../UserContext';


export default function Menteeprofile(props) {
  const data = props.state.mentees;

  const {user} = useContext(UserContext);

  const userEmail = user.email;
  
 

  
    const userData = data.filter((user) => {
      if (user.email === userEmail) {
        return user;
      }
    });
   
  const userObj =userData[0];
   
   console.log("emaillll",userObj.email)
 

  return(
    <div className="menteeprofile-wrapper">
     <Header/>
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
        <img src={userObj.photo_url}></img>
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

      {/* <div>
        <Link to={`/dashboard/mentee/mentordetail/${mentorid}`}>
          <button className="card_btn"
                  >view profile</button>
        </Link>
      </div> */}

    </div>
    </div>
  )
}