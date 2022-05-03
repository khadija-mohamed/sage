import React from "react";

import "./MenteeList.css";
import MenteeListItem from "./MenteeListItem";

export default function MenteeList(props) {
  const mentees = props.mentees.map((mentee) => {
    return (
      <MenteeListItem
        key={mentee.id}
        firstname={mentee.first_name}
        lastname={mentee.last_name}
        photo={mentee.photo_url}
        skill={mentee.skill}
        description={mentee.description}
        location={mentee.location}
      />
    );
  });

  return (
    <section className="mentees">
      <h4 className="mentees__header text--light">Mentees</h4>
      <ul className="mentees__list">{mentees}</ul>
    </section>
  );
}
