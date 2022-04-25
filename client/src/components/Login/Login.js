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

<<<<<<< HEAD
    if (validateForm()) {
      axios.post(
        'http://localhost:8080/login/login', { email: email, password: password }
      ).then(() => {
        navigate('/dashboard');
      }).catch(err => {
        alert(err.response.data.message)     
      });
    }
  }

// if -- err.response exist -- do in catch function, send unknown error otherwise .

=======
    if (validateForm) {
      axios
        .post("http://localhost:8080/login/login", {
          email: email,
          password: password,
        })
        .then(() => {
          navigate("/dashboard");
        })
        .catch((err) => err);
    }
  };

>>>>>>> d4edaeb21e456009049201c6cfc7df2d22e85eb9
  console.log("what is user",user)
  return(
    <div>
      <NavBar/>
    <div className="login-wrapper">
      <div className="orange-main">
      <div className="transparent-text">
      </div>
      <div className="sage-block">
        <div className="head-main">

          <span className="head-left"> S</span>
           <img className="o3" src={logo} alt="logo"/> 
          <span className="head-right">GE</span>
          <div className='login'>
            <h4> {" "}Please enter email and password to proceed.</h4>
          {/* <div className='form-input'> */}
            <form onSubmit={handleSubmit} action="">
                  <input type="text" name="" id="email" placeholder="email" className="email" onChange={e => setEmail(e.target.value)}></input>
                  <input type="password" name="" id="password" placeholder="password" className="pass" onChange={e => setPassword(e.target.value)}></input>
                  {!email || !password ? <div><p>Please enter your email and password.</p></div> : <div></div>}
                  <button className="button-52" type="submit" onClick={() => login(email)}>Submit</button>
          </form>
          </div>
          </div>
      </div>
    </div>
  </div>
</div>
    
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> d4edaeb21e456009049201c6cfc7df2d22e85eb9
