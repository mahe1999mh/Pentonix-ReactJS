import React, { useState } from "react";
import "./navbar.css";


import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Page 1</NavLink>
            </li>
            <li>
              <NavLink to="/page2">Page 2</NavLink>
            </li>
            <li>
              <NavLink to="/page3">Page 3</NavLink>
            </li>
            
          </ul>
        </div>


        
      
      </nav>

    </>
  );
};

export default Navbar;