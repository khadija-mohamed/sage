import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div class="about_container first">
        <header>Sage.</header>
        <i className="tagline">Learn to grow.</i>
        <button className="button-52 abt-btn" type="submit">
          <Link to="/">
            <span className="about-btn-text">Join</span>
          </Link>
        </button>
      </div>

      <div class="blank"></div>

      <div class="about_container second">
        <div class="item">
          <div class="img img-first"></div>
          <div class="card">
            <h3>Carmen</h3>
            <p>
              Junior full stack web developer. A background in business and
              accounting but a passion for code!
            </p>
            <button className="button-52 abt-btn" type="submit">
              <a href="https://www.linkedin.com/in/carmen-kuang-759828237/">
                <span className="about-btn-text">LinkedIn</span>
              </a>
            </button>
          </div>
        </div>
        <div class="item">
          <div class="img img-second"></div>
          <div class="card">
            <h3>Sasu</h3>
            <p>
              Junior full stack web developer. A background in fashion design
              and illustration but a passion for code!
            </p>
            <button className="button-52 abt-btn" type="submit">
              <a href="https://www.linkedin.com/in/sasuosayande/">
                <span className="about-btn-text">LinkedIn</span>
              </a>
            </button>
          </div>
        </div>
        <div class="item">
          <div class="img img-third"></div>
          <div class="card">
            <h3>Khadija</h3>
            <p>
              Junior full stack web developer. A background in biology and
              english literature but a passion for code!
            </p>
            <button className="button-52 abt-btn" type="submit">
              <a href="https://www.linkedin.com/in/khadija-mohamed/">
                <span className="about-btn-text">LinkedIn</span>
              </a>
            </button>
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
