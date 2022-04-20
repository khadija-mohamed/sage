import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Login.css';

async function loginUser(credentials) {

  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
    .catch(err => console.log("Error:", err))
 }

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    // try {
    //   let response = await axios({
    //     method: 'post',
    //     url: 'http://localhost:8080/login',
    //     data: {
    //       email: email,
    //       password: password
    //     },
    //   })
    //   return response
    // } catch(error) {
    //   console.log(error)
    // }
    const token = await loginUser({
      email,
      password
    });
    navigate('/dashboard');
    console.log("Token:", token)
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

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}