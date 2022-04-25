import React from 'react';
import './Mentorprofile.css';
import MentorDashboard from '../MentorDashboard';
import Sagecarousel from '../Modal/carosel';
import OutlinedCard from '../Modal/card';
import ActionAreaCard from '../Modal/card2';

export default function Mentorprofile() {
  return(
    <div className="mentorprofile-wrapper">
      <MentorDashboard /> 
      <div className='mentorprofile'>
      {/* <div className='Outlinedcard'>
   <OutlinedCard />
    </div>  */}
      {/* <Sagecarousel /> */}
      <header>

      </header>
 <div className='Actioncard'> <ActionAreaCard /></div> 
</div>
    </div>
  )
}