import "./NavbarStyles.css";
import { Component } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ props }) => {
  return (
    <div>
      <nav className="NavbarItems">
        <div className="item item-1">Smart.Analysis</div>
        <div className="item item-2">
          <i class="fa-solid fa-house-user"></i>Home
        </div>
        <div className="item item-3">
          <Link to="/services"> Our Service</Link>
        </div>
        <div className="item item-4">Contact</div>
      </nav>
    </div>
  );
};
export default Navbar;
