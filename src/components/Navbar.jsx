import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Mount</div>
        <ul className="nav-links">
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}
