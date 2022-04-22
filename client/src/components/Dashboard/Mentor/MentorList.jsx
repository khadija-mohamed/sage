// import React from "react";
// import { useState } from 'react';
// import search from "../Searchbar/search.svg";
// import '../Searchbar/Searchbar.css';

// import "./MentorList.css";
// import MentorListItem from "./MentorListItem";



// export default function MentorList(props) {
//   const{searchname, setSearch} = useState('');
//   let { mentors,setMentor} = props;
//   const searchText = (event) =>{
//     setSearch(event.target.value);
//   }
//   // let mentorsdata = props.mentors;
//   // let dataSearch = mentorsdata.filter( item => {
//   //   return Object.keys(item).some(key => 
//   //     item[key].toLowerCase().include(searchname.toString().toLowerCase()
//   // })

//   // let dataSearch =mentorsdata.filter( mentor => {
//   //   return Object.keys(mentor).some(key => 
//   //     mentor[key].toString().toLowerCase().include(searchname.toString().toLowerCase()))

//   // })

//   // console.log("props.mentors",props.mentors);
//   // console.log("dataSearch",dataSearch)
//   // console.log("mentordata",mentorsdata)
 
  
//    mentors = mentors.map((mentor) => {
//     return (
      

         
//        <MentorListItem
//         key={mentor.id}
//         firstname={mentor.first_name}
//         lastname={mentor.last_name}

//         photo={mentor.photo_url}
//         skill={mentor.skill}
//         description={mentor.description}
//         location={mentor.location}
        
//         // setInterviewer={() => props.onChange(interviewer.id)}
//        />
      
        
   
      
//     );
//   });

//   return (
//     <section className="mentors">
      
//         <div className="search">
//         <img src={search} className="search-logo" alt="search" />
//         <input 
//           type="text"
//           id='input'
//           placeholder='Search By Name...' 
//           value={searchname}
//           onChange = {searchText.bind(this)}/>
//          </div>
//       <h4 className="mentors__header text--light">Mentor</h4>
//       <ul className="mentors__list">{mentors}</ul>
//     </section>
//   );
// }