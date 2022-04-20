import React from 'react';
import "./Register.css"

export default function Register() {
  return(
    <div className="register-wrapper">
      <h1>Welcome to Sage</h1>
      <small>Sign up as either a Mentor or a Mentee </small>
      <div>
      <form method="get" action="/register/sage"><button type="submit">Sage</button></form>
        </div>
        <div>
        <form method="get" action="/register/sagee"><button type="submit">Sagee</button></form>
        </div>
    </div>
  )
}