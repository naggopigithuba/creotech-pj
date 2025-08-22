import React from "react";
import "./Navbar.css"; // import css file
import { FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Exclusive</div>

      {/* Links */}
      <ul className="nav-links">
        <li className="active"><a href="/">Home</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/signup">Sign Up</a></li>
      </ul>

      {/* Search + Icons */}
      <div className="nav-right">
        <div className="search-box">
          <input type="text" placeholder="What are you looking for?" />
          <FiSearch className="search-icon" />
        </div>
        <FiHeart className="icon" />
        <FiShoppingCart className="icon" />
      </div>
    </nav>
  );
}
