import React from "react";
import PropTypes from "prop-types";

import "./MentorList.css";
import MentorListItem from "./MentorListItem";


export default function MentorList(props) {
  // MentorList.propTypes = {
  //   Mentors: PropTypes.array.isRequired,
  // };
  console.log("mentorlist",props.mentors)
  const mentors = props.mentors.map((mentor) => {
    return (
      <MentorListItem
        key={mentor.id}
        firstname={mentor.first_name}
        lastname={mentor.last_name}

        photo={mentor.photo_url}
        skill={mentor.skill}
        description={mentor.description}
        location={mentor.location}
        
        // setInterviewer={() => props.onChange(interviewer.id)}
      />
    );
  });

  return (
    <section className="mentors">
      <h4 className="mentors__header text--light">Mentor</h4>
      <ul className="mentors__list">{mentors}</ul>
    </section>
  );
}