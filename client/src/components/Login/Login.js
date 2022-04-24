
import React, { useContext, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './Login.css';



import { UserContext } from '../../UserContext';


import logo from "./logo.svg";

import "./Login.css";
import NavBar from "../NavBar/NavBar";


export default function Login(props) {
   const { setIsLoggedIn, onUpdate } = props;
   const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // const [user, setUser] = useState("");

  const{user,login} = useContext(UserContext);
  

  // const {user:email,password,
  //        setUser:setEmail,setPassword} = useContext(UserContext);
  // const [user, setUser] = useState

  // const params = useParams();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate('/dashboard');
  //   }, 2000);
  // }, [navigate]);

  // useEffect(() => {

  // }, [params.id]);

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

    if (validateForm) {

      axios.post(
        'http://localhost:8080/login/login', { email: email, password: password }
      ).then(() => {
        navigate('/dashboard');
        
        // setIsLoggedIn(true);
        // onUpdate(true);
      }).catch(err => err);

    }


    
  }
  console.log("what is user",user)
  return(
    <div>
      <NavBar/>
    <div className="login-wrapper">
       
      {/* <div id="bg"></div> */}
      <div className="orange-main">
        <div className="transparent-text"></div>
        <div className="sage-block">
          <h1 className="head-main">
            <span className="head-left"> S</span>
            <img className="o3" src={logo} alt="logo" />
            <span className="head-right">GE</span>
            <h4>
              {" "}
              Please enter email and Password to proceed.
              <form onSubmit={handleSubmit} action="">
                <label for=""></label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="email"
                  class="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <label for=""></label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="password"
                  class="pass"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button class="button-52" type="submit">
                  Submit
                </button>
              </form>
            </h4>
          </h1>
        </div>
      </div>
    </div>
  
  </div>

    
  )
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }