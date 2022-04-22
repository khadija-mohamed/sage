import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(props) {
  const [state, setState] = useState({
    mentors: [],
    mentees: [],
  });

  //  const setMentors = (mentors) => setState((prev) => ({ ...prev, mentors }));
  
  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8080/mentors"),
      axios.get("http://localhost:8080/mentees"),
    ]).then((all) => {
     
      setState((prev) => {
        
        return { ...prev, mentors: all[0].data, mentees: all[1].data };
      });
    });
    
    
  }, []);

  return {
    
    state
   
  };
}
