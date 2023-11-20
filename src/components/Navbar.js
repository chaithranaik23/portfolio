import React, { useEffect, useState } from "react";
import "../css/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const [locationpath,setLocationpath] = useState("/");
  useEffect(() => {
    setLocationpath(location.pathname);
    // if(location.pathname === "/about") {
    //   console.log("Hello there");
    // }
  }, [location]);

  const hamburger = (value) => {
    setNavbar(value);
  };

  return (
    <div className="navbar">
      <div className="nav-links">
        {/* Desktop menu items */}
        {
          locationpath === "/" ?
           "" 
           : 
           <Link to="/">Home</Link>
        }
        {
          locationpath === "/about" ?
          ""
          :
          <Link to="/about">About Me</Link>
        }
        {
          locationpath === "/skills" ?
          ""
          :
          <Link to="/skills">Skills</Link>
        }
        {
          locationpath === "/education" ?
          ""
          :
          <Link to="/education">Education</Link>
        }
        
        <a href="#">Projects</a>
        {
          locationpath === "/contact" ?
          ""
          :
          <Link to="/contact">Contact</Link>
        }
      </div>

      <div className="mobile-menu">
        {/* Hamburger icon for mobile */}
        <span className="icon" onClick={() => hamburger(true)}>
          <button onClick={() => hamburger(true)}>&#9776;</button>
        </span>

        {/* Mobile sidebar */}
        {navbar && (
          <div id="mysidebar" className="sidebar">
            <span className="closebtn" onClick={() => hamburger(false)}>
              &times;
            </span>
            <ul>
              {
                locationpath === "/" ?
                ""
                :
                <li>
                <Link to="/" onClick={() => hamburger(false)}>
                  Home
                </Link>
                </li>
              }
              {
                locationpath === "/about" ?
                ""
                :
                <li>
                <Link to="/about" onClick={() => hamburger(false)}>
                  About Me
                </Link>
                </li>
              }
              {
                locationpath === "/skills" ?
                ""
                :
                <li>
                <Link to="/skills" onClick={() => hamburger(false)}>
                  Skills
                </Link>
                </li>
              }
              {
                locationpath === "/education" ?
                ""
                :
                <li>
                <Link to="/education" onClick={() => hamburger(false)}>
                  Education
                </Link>
                </li>
              }
              
              <li>
                <a href="#">Projects</a>
              </li>
              {
                locationpath === "/contact" ?
                ""
                :
                <li>
                  <Link to="/contact" onClick={() => hamburger(false)}>
                    Contact
                  </Link>
                </li>
              }
            </ul>
          </div>
        )}
      </div>
      <footer>&#169; Chaithra Naik</footer>
    </div>
  );
}

export default Navbar;
