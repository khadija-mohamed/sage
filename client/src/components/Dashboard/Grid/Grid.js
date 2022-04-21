import React from "react";
import "./Grid.css";

export default function Grid(props) {
  const menteeList = props.menteeList?.map((mentee) => {
    return (
      <div class="grid">
        <div>
          <div class="mentee_card">
            <div>
              <p>Name:</p>
              <span class="mentee_name"> {mentee.first_name} </span>
            </div>
            <div>
              <img class="profile_img" src="{ mentee.photo_url }"></img>
            </div>
            <div>
              <p>Description:</p> <span>{mentee.description}</span>
            </div>
            <div>
              <p>Skills:</p> <span>{mentee.skill}</span>
            </div>
          </div>
        </div>
        {/* <div class="grid-item"> <img src="https://media.istockphoto.com/photos/portrait-young-confident-smart-asian-businessman-look-at-camera-and-picture-id1288538088?b=1&k=20&m=1288538088&s=170667a&w=0&h=3efMku7kSXUhpVrErAVVgxp6G91tRZ_5seygOn68RnE=" class="gallery-image" alt=""/> </div>
  <div class="grid-item"><img src="https://t4.ftcdn.net/jpg/02/23/54/25/360_F_223542597_Fs4eqojXUIwD66GlYwirxALwIIW8tZhz.jpg" class="gallery-image" alt=""/></div>
  <div class="grid-item"><img src="https://t4.ftcdn.net/jpg/04/01/35/61/360_F_401356149_GayjMotp9bIkKA8WKcOvNJ2A5zXUuFS1.jpg" class="gallery-image" alt=""/></div>
  <div class="grid-item"> <img src="https://media.istockphoto.com/photos/portrait-young-confident-smart-asian-businessman-look-at-camera-and-picture-id1288538088?b=1&k=20&m=1288538088&s=170667a&w=0&h=3efMku7kSXUhpVrErAVVgxp6G91tRZ_5seygOn68RnE=" class="gallery-image" alt=""/></div>
  <div class="grid-item"><img src="https://t4.ftcdn.net/jpg/02/23/54/25/360_F_223542597_Fs4eqojXUIwD66GlYwirxALwIIW8tZhz.jpg" class="gallery-image" alt=""/></div>
  <div class="grid-item"><img src="https://t4.ftcdn.net/jpg/04/01/35/61/360_F_401356149_GayjMotp9bIkKA8WKcOvNJ2A5zXUuFS1.jpg" class="gallery-image" alt=""/></div> */}
      </div>
    );
  });

  return (
    <section>
      <h1>hello</h1>
      <ul>{menteeList}</ul>
    </section>
  );
}
