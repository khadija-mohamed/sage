// import react from "react";
import logo from "./logo.svg";
import './Landing.css';
// import {Link} from "react-router-dom";


const Landing = () => {
  return  (
    <div className="wrapper">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Welcome to Sage </h1>
        </header>
        <div className="main">
          <h1>Sage</h1>
        </div>
      <div className="main-wrapper">
      <div className="options">
        <h2>Please Register or Login to proceed</h2>
        <div className="buttons">
        {/* <form method="get" action="/register"><button type="submit">Register</button></form>
        <form method="get" action="/login"><button type="submit">Login</button></form> */}
        <form method="get" action="/register"><button type="submit">Register</button></form>
        <form method="get" action="/login"><button type="submit">Login</button></form>
        </div>
  
        </div>
        </div>

        <footer className="footer">

        </footer>
      </div>
    </div>
  );
}

export default Landing