import React , {useEffect} from 'react'
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        Sage
      </NavLink>
    
     <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
        </ul>
      </div>
  </nav>
  )
}
export default Navbar;