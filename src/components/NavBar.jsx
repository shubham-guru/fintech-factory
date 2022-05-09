import React, { useState } from "react";
import logo from "../images/logo.png";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [dropDown, setDropDown] = useState("hidden");
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logoDiv">
          <NavLink to="/" className="logo">
            <img src={logo} alt="logo" width="40%" />
            <h3>FINTECH FACTORY</h3>
          </NavLink>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/" className="navLink">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="navLink">
                COMMUNITY
              </NavLink>
            </li>
            <li
              className="dropDown"
              onMouseEnter={() =>
                dropDown === "hidden" ? setDropDown("visible") : null
              }
              onMouseLeave={() =>
                dropDown === "visible" ? setDropDown("hidden") : null
              }
            >
              <NavLink to="" className="navLink">
                company
              </NavLink>
              <ul style={{ visibility: dropDown }}>
                <li>
                  <NavLink to="/gallery" className="navLink dropDownLi">
                    experience zone
                  </NavLink>
                </li>
            <li>
              <NavLink to="/team" className="navLink dropDownLi">
                Our team
              </NavLink>
            </li>
            
              </ul>
            </li>
            <li>
              <NavLink to="/products" className="navLink">
                SHOP
              </NavLink>
            </li>

            <li>
              <NavLink to="/byof" className="navLink">
                byof
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <NavLink to="https://www.youtube.com/">
                <FaFacebookSquare className="facebook" />
              </NavLink>
            </li>
            <li>
              <NavLink to="https://www.instagram.com/">
                <FaInstagramSquare className="instagram" />
              </NavLink>
            </li>
            <li>
              <NavLink to="https://www.youtube.com/">
                <FaYoutubeSquare className="youtube" />
              </NavLink>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
