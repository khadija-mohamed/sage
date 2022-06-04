import React, { useEffect } from "react";
import "./NavBar.css";
import { NavLink, useParams } from "react-router-dom";
import $ from "jquery";

const MenteeDetailsNavBar = () => {
  let { menteeid } = useParams();

  function animation() {
    const tabsNewAnim = $("#navbarSupportedContent");
    const activeItemNewAnim = tabsNewAnim.find(".active");
    const activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    const itemPosNewAnimTop = activeItemNewAnim.position();
    const itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      const activeWidthNewAnimHeight = $(this).innerHeight();
      const activeWidthNewAnimWidth = $(this).innerWidth();
      const itemPosNewAnimTop = $(this).position();
      const itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <NavLink className="navbar-brand navbar-logo" to="/" exact="true">
        Sage.
      </NavLink>

      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/dashboard/mentor/mentorfeed"
              exact
            >
              <i className="fa-solid fa-seedling"></i> My Feed
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to={`/dashboard/mentor/menteedetail/${menteeid}`}
              exact
            >
              <i className="fa-solid fa-user-group"></i> Profile Details
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/dashboard/mentor/mentorprofile"
              exact
            >
              <i className="fa-solid fa-user"></i> My Profile
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard/video" exact>
              <i className="fa-solid fa-users"></i> Video Chat
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout" exact>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenteeDetailsNavBar;