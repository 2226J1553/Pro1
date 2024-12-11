import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <>
      <nav>
        <ul>
         <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/menus">Menus</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/certificates">Certificates</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
