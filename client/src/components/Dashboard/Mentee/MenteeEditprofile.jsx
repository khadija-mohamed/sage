import React, { useState,useContext } from 'react';
// import logo from "./logo.svg"
// import light from "./light.svg"
import './MenteeEditprofile.scss';
import {Link} from 'react-router-dom';

import { UserContext } from '../../../UserContext';

import logo from './logo.svg'
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";


import Dashboard from '../Dashboard';
import useApplicationData from '../../../hooks/useApplicationData';



export default function MenteeEditprofile(props) {
  
  const navigate = useNavigate();
   
   const setOpenModal = props.setOpenModal;

  
  // const menteeId = useParams();
  
  

  const[user,setUser] = useState(props.mentee);
  const { update } = useContext(UserContext);
  
  const menteeId = user.id;
  console.log("menteeedit profile", props,menteeId)

  


  const converBoolean = (value)=> {
     if (value === "true") {
       return true;
     } 

  }

  let handleSubmit = (e) => {
       e.preventDefault();

       axios
         .post(`http://localhost:8080/login/mentee/${menteeId}/edit`, {
           
           
           photo_url: user.photo_url,
           description: user.description,
           skill: user.skill,
           isactive: user.isactive,
           location:user.location
         })
         .then( res => {
           setOpenModal(false);
          // console.log("whyyyyy")
           navigate("/dashboard/mentee/menteeprofile");
          // console.log(res.data);
          
          update(user);
        // window.location = "/dashboard"
         })
         .catch((err) => err);
     
   };

  return (
    
  

    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="orange-main">
          <div className="transparent-text">
          </div>
          <div className="sage-block">
            <div className="head-main">
          
            <div className='login'>
              < h4> Update your profile</h4>
              <form onSubmit={handleSubmit} action="">
              <label>
                  <p>Location</p>
                  <input
                    type="text"
                    id="description"
                    defaultValue = {user.location}
                    onChange={(e) => setUser((prev)=> ({
                      ...prev,
                      location:e.target.value}))
                    }
                    required
                  />
                </label>

                <label>
                  <p>About</p>
                  <input
                    type="text"
                    id="description"
                    defaultValue = {user.description}
                    onChange={(e) => setUser((prev)=> ({
                      ...prev,
                      description:e.target.value}))
                    }
                    required
                  />
                </label>

                <label>
                  <p>Skills</p>
                  <input
                    type="text"
                    id="skill"
                    defaultValue = {user.skill}
                    onChange={(e) => setUser((prev)=> ({
                      ...prev,
                      skill:e.target.value}))
                    }
                    required
                  />
                </label> 

                <label  className="button">
                  <p>Enter a Photo URL</p>

                  <input
                    type="text"
                    id="input"
                    defaultValue = {user.photo_url}
                    onChange={(e) => setUser((prev)=> ({
                      ...prev,
                      photo_url:e.target.value}))
                    }
                    required
                  />
                </label>
                <label  className="button">
                <p>isActive</p>
                <select
                    className="form-control-button"
                    id="input"
                    onChange={(e) => setUser((prev)=> ({
                      ...prev,
                      isActive:converBoolean(e.target.value)}))
                    // onChange={(e) => setIsactive(converBoolean(e.target.value))
                    }
                  >
                  <option value ="True">Active</option>
                  <option value ="False">Not Active</option>
                </select>
                </label>

                <div className="footer">
                  <button
                    onClick={() => {
                      setOpenModal(false);
                    }}
                    id="cancelBtn"
                  >
                    Cancel
                  </button>
                 
                  
                 
                    {/* <Link to={`/dashboard`}>  */}
                  <button
                  type ="submit"
                    // onClick={() => {
                    //    setOpenModal(false);
                    //  }}
                    
                   
                  >
                    Submit
                  </button>
                  
                  {/* </Link>  */}
                 </div>
              </form>
                 
               </div>    
          </div>
        </div>
    </div>
  </div>
  </div>
   
  );
}
