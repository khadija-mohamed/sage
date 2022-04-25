import { createContext } from "react";
 
export const UserContext = createContext({email: '', location:'', skill:'', description:'',isactive:true, photo_url:'',auth: false});