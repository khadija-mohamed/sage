import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login(props) {
  // const { setIsLoggedIn, onUpdate } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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

  return(
    <div className="login-wrapper">
    
      <div>

      </div>
      <h1>Sage</h1>
      <small>Please log in</small>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }