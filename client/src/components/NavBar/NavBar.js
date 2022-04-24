import React from 'react';

function NavBar({openSidebar}) {
  return (
  <div className="Navbar"> 
  <div className='menu' onClick={openSidebar}>
  <i className="fa-solid fa-bars"></i>
  </div>
  <div className="title">Sage</div>
  </div>
)}

export default NavBar;