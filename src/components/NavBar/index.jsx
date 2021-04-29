import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";

import "./styles.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handlerClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handlerShowButton = () => {
    if (window.innerWidth <= 960) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  };

  window.addEventListener("resize", handlerShowButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            RDT
          </Link>
          <div className="menu-icon" onClick={handlerClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
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
            </li>
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
          {showButton && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
