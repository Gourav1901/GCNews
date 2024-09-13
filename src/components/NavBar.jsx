import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/image.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";



function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <nav>
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to="/about">AboutUs</Link></li>
           
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login/Signup</Link></li>
          </ul>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;