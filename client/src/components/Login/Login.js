
// import React, { useContext, useState } from 'react';
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// import './Login.css';
// import useApplicationData from "../../hooks/useApplicationData";


// import { UserContext } from '../../UserContext';


// import logo from "./logo.svg";

// import "./Login.css";
// import NavBar from "../NavBar/NavBar";


// export default function Login(props) {
//    const { setIsLoggedIn, onUpdate } = props;
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   // const [user, setUser] = useState("");
//   const data = props;
//  console.log("loginprops",props)
//   const{user,login} = useContext(UserContext);

 
//    const { state } = useApplicationData();

//   const validateForm = () => {
//     if (!email) {
//       setError("Email cannot be blank");
//       return false;
//     }
//     setError("");
//     if (!password) {
//       setError("Password cannot be blank");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

// // if -- err.response exist -- do in catch function, send unknown error otherwise .

//     if (validateForm()) {
//       axios
//         .post(
//           'http://localhost:8080/login/login',
//           {
//             email: email,
//             password: password,
//           },
//           { withCredentials: true }
//         )
//         .then(() => {
//           const mentee = state.mentees.map((menteeEmail) => menteeEmail.email);
//           const mentor = state.mentors.map((mentorEmail) => mentorEmail.email);
//           console.log("hihihi,mentee",mentee)
//           if (mentee.includes(email)) {
//             navigate('/dashboard/mentee/menteefeed');
//           }
//           if (mentor.includes(email)) {
//             navigate('/dashboard/mentor/mentorfeed');
//           }
//         })
//         .catch(err => {
//           console.log("Error", err.response)
//           alert(err.response.data.message)     
//         });
//     }
//   }

//   console.log("what is user",user)
//   return(
//     <div>
//       <NavBar/>
//     <div className="login-wrapper">
       
//       {/* <div id="bg"></div> */}
//       <div className="orange-main">
//       <div className="transparent-text">
//       </div>
//       <div className="sage-block">
//         <div className="head-main">
        
//           <span className="head-left"> S</span>
//            <img className="o3" src={logo} alt="logo"/> 
//           <span className="head-right">GE</span>
//           <div className='login'>
//             <h4> {" "}Please enter email and Password to proceed.</h4>
//           {/* <div className='form-input'> */}
//             <form onSubmit={handleSubmit} action="">
//                    {/* <label for=""></label>  */}
//                   <input type="text" name="" id="email" placeholder="email" className="email" onChange={e => setEmail(e.target.value)}></input>
//                   {/* <label for=""></label> */}
//                   <input type="password" name="" id="password" placeholder="password" className="pass" onChange={e => setPassword(e.target.value)}></input>
//                   <button className="button-52" type="submit" onClick={() => login(email)}>Submit</button>
//           </form>
//           </div>
//           </div>
       
        
//       </div>
//     </div>
  
//   </div>
// </div>
    
//   )
// }



   
import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { UserContext } from "../../UserContext";
import logo from "./logo.svg";

import NavBar from "../NavBar/NavBar";
import useApplicationData from "../../hooks/useApplicationData";

export default function Login(props) {
  const { setIsLoggedIn, onUpdate } = props;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { user, login } = useContext(UserContext);

  const { state } = useApplicationData();

  const validateForm = () => {
    if (!email) {
      setError("Email cannot be blank");
      return false;
    }
    setError("");
    if (!password) {
      setError("Password cannot be blank");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

// if -- err.response exist -- do in catch function, send unknown error otherwise .

    if (validateForm()) {
      axios
        .post(
          'http://localhost:8080/login/login',
          {
            email: email,
            password: password,
          },
          { withCredentials: true }
        )
        .then(() => {
          const mentee = state.mentees.map((menteeEmail) => menteeEmail.email);
          const mentor = state.mentors.map((mentorEmail) => mentorEmail.email);
          if (mentee.includes(email)) {
            navigate('/dashboard/mentee/menteefeed');
          }
          if (mentor.includes(email)) {
            navigate('/dashboard/mentor/mentorfeed');
          }
        })
        .catch(err => {
           alert(err.response.data.message)     
        });
    }
  }

  return (
    <div>
      <NavBar />
      <div className="login-wrapper">
        <div className="orange-main">
          <div className="register-btn">
        <button className="button-52" type="submit"><Link to="/register"><span className="register-btn-text">Register</span></Link></button>
        </div>
          <div className="transparent-text"></div>
          <div className="sage-block">
            <div className="head-main">
              <span className="head-left"> S</span>
              <img className="o3" src={logo} alt="logo" />
              <span className="head-right">GE</span>
              <div className="login">
                {!email || !password ? (
                  <div>
                    <h4> Please enter email and password to proceed.</h4>
                  </div>
                ) : (
                  <h4>“The expert in anything was once a beginner.”</h4>
                )}
                <form onSubmit={handleSubmit} action="">
                  <input
                    type="text"
                    name=""
                    id="email"
                    placeholder="email"
                    className="email"
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  <input
                    type="password"
                    name=""
                    id="password"
                    placeholder="password"
                    className="pass"
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  <button
                    className="button-52"
                    type="submit"
                    onClick={() => login(email)}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}