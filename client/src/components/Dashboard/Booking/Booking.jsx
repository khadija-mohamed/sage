import { useState } from "react";
import logo from "./logo.svg";
import Axios from "axios";
import { Link } from "react-router-dom";
import Sagemodal from "../Modal/Modal";
import NavBar from "../../NavBar/NavBar";
import useApplicationData from "../../../hooks/useApplicationData";
import "./booking.scss";

export default function Booking(props) {
  const url = "http://localhost:8080";

  const [data, setData] = useState({
    name: "",
    mentor: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
  });

  const { state } = useApplicationData();
  const mentorArray = state.mentors;

  function submit(e) {
    e.preventDefault();
    Axios.post(`${url}/appointments/booking`, {
      name: data.name,
      mentor: data.mentor,
      description: data.description,
      date: data.date,
      startTime: data.startTime,
      endTime: data.endTime,
    }).then((res) => {
      console.log(res.data);
    });
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <div className="Booking">
      <NavBar />
      <div className="orange-main">
        <div className="transparent-text"></div>
        <div className="sage-block">
          <h1 className="head-main">
            <span className="head-left"> S</span>
            <img className="o3" src={logo} alt="logo" />
            <span className="head-right">GE</span>
            <h4>
              {" "}
              Book a meeting with a Sage
              <form action="/dashboard/mentee/menteeprofile" onSubmit={submit}>
                <label>
                  <p>Do you have the Sage Calendar added?</p>
                  <Sagemodal />
                </label>

                <label>
                  <p>Your Name</p>
                  <input
                    type="text"
                    className="input"
                    onChange={(e) => handle(e)}
                    id="name"
                    value={data.name}
                  />
                </label>

                <label>
                  <p> Name of Sage you wish to meet </p>
                  <select
                    className="options"
                    onChange={(e) => handle(e)}
                    id="mentor"
                    value={data.mentor}
                  >
                    <option disabled>Select</option>
                    {mentorArray.map((mentor) => {
                      return <option> {mentor.first_name} </option>;
                    })}
                  </select>
                </label>

                <label>
                  <p> What Sage advice do you want to hear?</p>
                  <input
                    onChange={(e) => handle(e)}
                    id="description"
                    value={data.description}
                    type="text"
                  />
                </label>

                <label>
                  <p>Select a date </p>
                  <input
                    onChange={(e) => handle(e)}
                    id="date"
                    value={data.date}
                    type="date"
                    className="datepicker"
                  />
                  <p>Select a start-time </p>
                  <input
                    onChange={(e) => handle(e)}
                    id="startTime"
                    value={data.startTime}
                    type="time"
                    className="timepicker"
                  />
                  <p>Select an end-time </p>
                  <input
                    onChange={(e) => handle(e)}
                    id="endTime"
                    value={data.endTime}
                    type="time"
                    className="timepicker"
                  />
                </label>
                <div>
                  <div></div>
                  <button className="button-52" type="submit">
                    <Link to="/dashboard/mentee/menteeprofile">Book</Link>
                  </button>
                </div>
              </form>
            </h4>
          </h1>
        </div>
      </div>
    </div>
  );
}
