import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div class="about_container first">
        {/* <div class="about_container"> */}
          <header>Sage.</header>
          <i className="tagline">Learn to grow.</i>
          <button className="button-52 abt-btn" type="submit"><Link to="/"><span className="about-btn-text">Join</span></Link></button>
        {/* </div> */}
      </div>

      <div class="blank"></div>

      <div class="about_container second">
        <div class="item">
          <div class="img img-first"></div>
          <div class="card">
            <h3>Carmen</h3>
            <p>
              The goal is to reach the summit of a formation or the endpoint of
              a usually pre-defined route without falling
            </p>
            <button className="button-52 abt-btn" type="submit"><span className="about-btn-text">LinkedIn</span></button>
          </div>
        </div>
        <div class="item">
          <div class="img img-second"></div>
          <div class="card">
            <h3>Sasu</h3>
            <p>
              Exploring underground through networks of tunnels and passageways,
              which can be natural or artificial.
            </p>
            <button className="button-52 abt-btn" type="submit"><span className="about-btn-text">LinkedIn</span></button>
          </div>
        </div>
        <div class="item">
          <div class="img img-third"></div>
          <div class="card">
            <h3>Khadija</h3>
            <p>
              Jumping from an aeroplane and falling through the air before
              opening your parachute.
            </p>
            <button className="button-52 abt-btn" type="submit"><span className="about-btn-text">LinkedIn</span></button>
          </div>
        </div>
      </div>

      <div class="blank"></div>

      <div class="about_container third">
        <h1 className="h1-title">Who We Are</h1>
        <div className="paragraphs">
          <p>
            A group of young devs aiming to create the fundamental connection
            between those who want to learn and those that are willing to teach.
          </p>

          <p>
            A sage is someone who has attained wisdom. We hope that by using
            this application, our users will be able to grow into their careers
            and learn to network with others in their industry. At Sage, we care
            about building on those connections while facilitating an open
            atmosphere for users to feel comfortable in.
          </p>
        </div>
      </div>

      <div class="blank"></div>

      <div class="about_container fourth">
        <h1 className="h1-title">Our Sages</h1>
        <div className="paragraphs">
          <p>
            Our sages are also known as mentors. They are teachers, recruiters,
            and hobbyists who enjoy passing down their wisdom and experiences to
            sagees. If this sounds like you, register as a Sage and join our
            community!
          </p>
        </div>
      </div>

      <div class="blank"></div>

      <div class="about_container fifth">
        <h1 className="h1-title">Our Sagees</h1>
        <div className="paragraphs">
          <p>
            Our sagees are also known as mentees. They are students, beginners,
            and potential employees who are willing to hone their skills and
            expand their knowledge. If this sounds like you, register as a Sagee
            and join our community!
          </p>
        </div>
      </div>

      <div class="blank"></div>
    </div>
  );
};

export default About;



// import React from "react";
// import {  Link } from "react-router-dom";
// import './About.scss'


// const About = () => {

//   return  (
//     <div className="about">
//       <div class="about_container">
//   <header>Sage.</header>
//   <p>Zlatibor is a mountain of exceptional beauty whose special geographical properties have made this mountain a real gem of western Serbia.</p>
//   <button className="button-52" type="submit"><Link to="/"><span className="register-btn-text">Join</span></Link></button>
// </div>

// <div class="blank"></div>

// <div class="about_container second">
//   <div class="item">
//     <div class="img img-first"></div>
//     <div class="card">
//       <h3>Carmen</h3>
//       <p>The goal is to reach the summit of a formation or the endpoint of a usually pre-defined route without falling</p>
//       <a className="about_a" href="GOOGLE.CA">Learn more</a>
//     </div>
//   </div>
//   <div class="item">
//     <div class="img img-second"></div>
//     <div class="card">
//       <h3>Sasu</h3>
//       <p>Exploring underground through networks of tunnels and passageways, which can be natural or artificial.</p>
//       <a className="about_a" href="GOOGLE.CA">Learn more</a>
//     </div>
//   </div>
//   <div class="item">
//     <div class="img img-third"></div>
//     <div class="card">
//       <h3>Khadija</h3>
//       <p>Jumping from an aeroplane and falling through the air before opening your parachute.</p>
//       <a className="about_a" href="GOOGLE.CA">Learn more</a>
//     </div>
//   </div>
// </div>

// <div class="blank"></div>

// <div class="about_container">
//   <h1>Who We Are</h1>
//   <p>
// A group of young devs aiming to create the fundamental connection between those who want to learn and those that are willing to teach.

// A sage is someone who has attained wisdom. We hope that by using this application, our users will be able to grow into their careers and learn to network with others in their industry. At Sage, we care about building on those connections while facilitating an open atmosphere for users to feel comfortable in.</p>

// </div>

// <div class="blank"></div>


// <div class="about_container">
//   <h1>Our Sages</h1>
//   <p>
// Our sages are also known as mentors. They are teachers, recruiters, and hobbyists who enjoy passing down their wisdom and experiences to sagees. If this sounds like you, register as a Sage and join our community!
// </p>
// </div>

// <div class="blank"></div>

// <div class="about_container">
//   <h1>Our Sagees</h1>
//   <p>
// Our sagees are also known as mentees. They are students, beginners, and potential employees who are willing to hone their skills and expand their knowledge. If this sounds like you, register as a Sagee and join our community!
// </p>
// </div>

// <div class="blank"></div>
//     </div>
//   )}



//   export default About;