import React from 'react';

import './Register.css';

export default function Register() {
  return(
    <div className="register-wrapper">
      <h1>Welcome to Sage</h1>
      <form>
        <label>
          <p>First Name</p>
          <input type="text" />
        </label>
        <label>
          <p>Last Name</p>
          <input type="text" />
        </label>
        <label>
          <p>Email</p>
          <input type="email" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <label>
          <p>Confirm Password</p>
          <input type="password" />
        </label>
        <label>
          <p>Upload a Photo</p>
          <input type="text" />
        </label>
        <label>
          <p>About</p>
          <input type="text" />
        </label>
        <label>
          <p>Skills</p>
          <input type="text" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}