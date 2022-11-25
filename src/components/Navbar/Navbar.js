import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "../helper/Button";
function Navbar() {
  // state values
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  //useEffect
  useEffect(() => {
    showButton();
  }, []);
  // functions of handling clicks
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);
  //########
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRAVEL <FontAwesomeIcon icon={faHotel} className="fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <FontAwesomeIcon
                icon={faTimes}
                className={click ? "fas fa-times" : "fas fa-bars"}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className={click ? "fas fa-times" : "fas fa-bars"}
              />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
