import React, { useState, useContext } from "react";
import "./MenteeEditprofile.scss";
import { UserContext } from "../../../UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function MenteeEditprofile(props) {
  const navigate = useNavigate();
  const setOpenModal = props.setOpenModal;
  const [user, setUser] = useState(props.mentee);
  const { update } = useContext(UserContext);
  const menteeId = user.id;

  const converBoolean = (value) => {
    if (value === "true") {
      return true;
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8080/login/mentee/${menteeId}/edit`, {
        photo_url: user.photo_url,
        description: user.description,
        skill: user.skill,
        isactive: user.isactive,
        location: user.location,
      })
      .then((res) => {
        setOpenModal(false);
        navigate("/dashboard/mentee/menteeprofile");

        update(user);
      })
      .catch((err) => err);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="orange-main">
          <div className="transparent-text"></div>

          <div className="head-main">
            <div className="login">
              <h4> Update your profile</h4>
              <form onSubmit={handleSubmit} action="">
                <label>
                  <p>Location</p>
                  <input
                    type="text"
                    id="description"
                    defaultValue={user.location}
                    onChange={(e) =>
                      setUser((prev) => ({
                        ...prev,
                        location: e.target.value,
                      }))
                    }
                    required
                  />
                </label>

                <label>
                  <p>About</p>
                  <input
                    type="text"
                    id="description"
                    defaultValue={user.description}
                    onChange={(e) =>
                      setUser((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    required
                  />
                </label>

                <label>
                  <p>Skills</p>
                  <input
                    type="text"
                    id="skill"
                    defaultValue={user.skill}
                    onChange={(e) =>
                      setUser((prev) => ({
                        ...prev,
                        skill: e.target.value,
                      }))
                    }
                    required
                  />
                </label>

                <label className="button">
                  <p>Enter a Photo URL</p>

                  <input
                    type="text"
                    id="input"
                    defaultValue={user.photo_url}
                    onChange={(e) =>
                      setUser((prev) => ({
                        ...prev,
                        photo_url: e.target.value,
                      }))
                    }
                    required
                  />
                </label>
                <label className="button">
                  <p>isActive</p>
                  <select
                    className="form-control-button"
                    id="input"
                    onChange={(e) =>
                      setUser((prev) => ({
                        ...prev,
                        isActive: converBoolean(e.target.value),
                      }))
                    }
                  >
                    <option value="True">Active</option>
                    <option value="False">Not Active</option>
                  </select>
                </label>

                <div className="footer">
                  <button
                    className="button-52"
                    onClick={() => {
                      setOpenModal(false);
                    }}
                    id="cancelBtn"
                  >
                    Cancel
                  </button>

                  <button type="submit" className="button-52">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
