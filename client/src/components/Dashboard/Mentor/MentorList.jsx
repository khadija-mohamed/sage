import React from "react";

import "./MentorList.css";
import MentorListItem from "./MentorListItem";


export default function MentorList(props) {

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
      />
    );
  });

  return (
    <section className="mentors">
      <h4 className="mentors__header text--light">Mentors</h4>
      <ul className="mentors__list">{mentors}</ul>
    </section>
  );
}