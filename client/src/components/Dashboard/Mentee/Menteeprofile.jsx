import React, { useState, useContext } from 'react';
import './Menteeprofile.css';
import {Link} from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import Dashboard from '../Dashboard';
import MenteeEditprofile from './MenteeEditprofile';
import Sagecarousel from '../Modal/carosel';
import OutlinedCard from '../Modal/card';
 import ActionAreaCard from '../Modal/card2';


export default function Menteeprofile(props) {
  

  //user email and auth
  const {user} = useContext(UserContext);

  const [modalOpen, setModalOpen] = useState(false);
  const userObj =user;

   
  return(
     <div className="menteeprofile-wrapper">
    <Dashboard />
   
    {/* <div className='card'> */}
      <div className="card_photo">
      
      <div className='Outlinedcard'>
        <OutlinedCard />
      </div> 
    <div className='card-wrapper2'> 
    <Sagecarousel />
    
    <div className='card2'>
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
      
      {/* <div className="card_tag">
        <p>{userObj.isActive}</p>
      </div> */}

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
      
    <iframe src="https://feed.mikle.com/widget/v2/154449/?preloader-text=Loading" height="399px" width="100%" className="fw-iframe" scrolling="no" frameBorder="0"></iframe>
    </div>

    </div>
   </div>
   
  )
  
}
