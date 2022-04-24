import React, { useState,useContext } from 'react';
import './Menteeprofile.css';
import {Link} from 'react-router-dom';

import { UserContext } from '../../../UserContext';
import Dashboard from '../Dashboard';



export default function Menteeprofile(props) {
  const data = props.state.mentees;

  const {user} = useContext(UserContext);

  const userEmail = user.email;
  // const [modalOpen, setModalOpen] = useState(false);

 


    const userData = data.filter((user) => {
      if (user.email === userEmail) {
        return user;
      }
    });

  const userObj =userData[0];
  // const menteeId = userObj.id;
console.log("TEST", userObj)

  return(
    <div className="menteeprofile-wrapper">
      <Dashboard />
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

      {/* <div >
            <Link to={/dashboard/mentee/menteeprofile/editprofile/${menteeId}'}>
          <button className="button-52"
                  >Edit profile</button>
        </Link> */}
        </div>

    </div>
  )
}
