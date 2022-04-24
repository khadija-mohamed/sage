import React, { useContext, useState } from 'react';
import axios from "axios";
// import logo from "./logo.svg"
import { useNavigate } from 'react-router-dom';
import './Login.css';
import NavBar from '../NavBar/NavBar';
import Header from '../NavBar/Header';
import { UserContext } from '../../UserContext';

export default function Login(props) {
   const { setIsLoggedIn, onUpdate } = props;
   const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
  }

  const handleSubmit = e => {
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
    
    // const token = await loginUser({
    //   email,
    //   password
    // });
    // // navigate('/dashboard');
    // console.log("Token:", token)
    // setToken(token);
    
  }
  console.log("what is user",user)
  return(
    <div>
      <Header/>
    <div className="login-wrapper">
       
      {/* <div id="bg"></div> */}
      <div className="orange-main">
      <div className="transparent-text">
      </div>
      <div className="sage-block">
        <div className="head-main">
        
          <span className="head-left"> S</span>
          {/* <img className="o3" src={logo} alt="logo"/> */}
          <span className="head-right">GE</span>
          <h4> Please enter email and Password to proceed.</h4>
          <form onSubmit={handleSubmit} action="">
                {/* <label for=""></label> */}
                <input type="text" name="" id="email" placeholder="email" className="email" onChange={e => setEmail(e.target.value)}></input>
                {/* <label for=""></label> */}
                <input type="password" name="" id="password" placeholder="password" className="pass" onChange={e => setPassword(e.target.value)}></input>
                <button className="button-52" type="submit" onClick={() => login(email)}>Submit</button>
          </form>
          </div>
 
        
      </div>
    </div>
  
  </div>
</div>
    
  )
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }
