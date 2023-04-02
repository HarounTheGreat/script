import "./NavbarStyles.css";
import { Component } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ props }) => {
  return (
    <div>
      <nav className="NavbarItems">
        <div className="item item-1">Smart.Analysis</div>
        <div className="item">Home</div>
        <div className="item">
          <Link to="/services" style={{ textDecoration: "none" }}>
            Our Service
          </Link>
        </div>
        <div className="item ">Contact</div>
      </nav>
    </div>
  );
};
export default Navbar;
