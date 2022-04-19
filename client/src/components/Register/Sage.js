import React from 'react';
import './Sage.css';

export default function Sage() {
  return(
    <div className="register-wrapper">
      <h1>Welcome to Sage</h1>
      <small> Hello Future Sage! </small>
      <form>
        <label>
          <p>First Name</p>
          <input type="text" id="input" />
        </label>
        <label>
          <p>Last Name</p>
          <input type="text" id='input' />
        </label>
        <label>
          <p>Email</p>
          <input type="email" id='input'/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" id="input"/>
        </label>
        <label>
          <p>Confirm Password</p>
          <input type="password" id="input"/>
        </label>
        <label>
          <p>Upload a Photo</p>
          <div class="imgbutton">
          <input type="file" id="img"/>
          </div>
        </label>
        <label>
          <p>About</p>
          <input type="text" id="input" />
        </label>
        <label>
          <p>Skills</p>
          <input type="text" id='input' />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
