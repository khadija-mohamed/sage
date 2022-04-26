import { createContext } from "react";
 
 export const UserContext = createContext({id:'',first_name:'', last_name: ' ',email: '', location:'', skill:'', description:'',isactive:true, photo_url:'',auth: false});

// export const UserContext = createContext({email: '',auth: false});