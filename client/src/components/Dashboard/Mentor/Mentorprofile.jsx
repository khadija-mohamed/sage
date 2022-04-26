import React, { useState, useContext } from 'react';
import './Mentorprofile.scss';
import {Link} from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import MentorDashboard from '../MentorDashboard';
import { Grid, Container, Typography } from '@mui/material';
import MentorEditprofile from './MentorEditprofile';
import Sagecarousel from '../Modal/carosel';
import OutlinedCard from '../Modal/card';
 import ActionAreaCard from '../Modal/card2';
 import Spotify from '../Modal/spotify';
import NotePad from '../Modal/Notepad';

export default function Mentorprofile() {
  
  const {user} = useContext(UserContext);

  const [modalOpen, setModalOpen] = useState(false);
  const userObj =user;

   
  return(
     <div className="menteeprofile-wrapper">
    <MentorDashboard />
    <Grid container spacing={4}>
        
          <Grid item xs={12} sm={6} md={3}>
          <div className='card-wrapper2'> 
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
                    <div className="outlinecard">
                    <button
                    className="button-52"
                    onClick={() => {
                      setModalOpen(true);}}>
                         Edit profile
                         </button>
                         {modalOpen && <MentorEditprofile setOpenModal={setModalOpen} key = {userObj.id} mentor = {userObj}/>}
                         </div>
                        <OutlinedCard />
                        </div>
                        </div>
                       
                        </Grid>
                        <iframe src="https://feed.mikle.com/widget/v2/154449/?preloader-text=Loading" height="450px" width="30%" class="fw-iframe" scrolling="no" frameborder="0"></iframe>
      
        <Sagecarousel className="carouselcontainer"/> 
        <div className='notepad'>
        <NotePad />
        </div>
        <div className='spotify'>
        <Spotify />
        </div>
  
        {/* <Spotify /> */}
        </Grid>


   </div>
  )
  
}

//fix github