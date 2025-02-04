import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">SSZ</div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="rect-challenge" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="login" onClick={closeMenu}>
            Login
          </Link>
        </li>
        <li>
          <Link to="signup" onClick={closeMenu}>
            Register
          </Link>
        </li>
        <li>
          <Link to="contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Toggle Button */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};
