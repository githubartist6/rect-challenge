import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">SSZ</div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>

        <Link to="/">
          Home
        </Link>

        <Link to="login">
          Login
        </Link>

        <Link to="signup">
          Register
        </Link>
      </ul>

      {/* Toggle Button */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};
