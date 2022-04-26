// import { useState } from "react";
// import { UserContext } from "./UserContext";


// const UserProvider = ({ children }) => {
//   const [user, setUser] = useState({ email: '', location:'', skill:'', description:'',isactive:true, photo_url:'',auth: false });
  
//   const login = (email) => {
//     setUser((user) => ({
//       email: email,
//       auth: true,
//     }));
//   };

//   const logout = () => {
//     setUser((user) => ({
//       email: '',
//       auth: false,
//     }));
//   };

//   return (
//     <UserContext.Provider value={{ user, login, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserProvider;