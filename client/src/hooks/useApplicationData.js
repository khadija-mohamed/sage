import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(props) {
  const [state, setState] = useState({
    
   
    mentors: [],
  });

  //  const setMentors = (mentors) => setState((prev) => ({ ...prev, mentors }));
  console.log("state",state);
  useEffect(() => {
    Promise.all([
      
      axios.get("http://localhost:8080/mentors"),
      
    ]).then((all) => {
      //  setState((prev) => ({
      //   ...prev,
      //   mentors: all[0].data
      //   }));
      setState((prev) => {
        // console.log("prev",prev)
        return {...prev,
        mentors: all[0].data}
        });
      })
    //   setState({
    //     mentors:all[0].data});
    // });
    
  },[]);

  

  return {
    state,
    setState
  };
}
