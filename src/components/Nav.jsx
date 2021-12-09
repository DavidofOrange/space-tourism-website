import React from "react";
import "../index.css";
import "./CSS/Nav.css";

function Nav() {
    return (
        <nav className="nav-bar container flex font-white">
          <ul >
            <li><a href="#" className="nav-icon">00 Home</a></li>
            <li><a href="#" className="nav-icon">01 Destination</a></li>
            <li><a href="#" className="nav-icon">02 Crew</a></li>
            <li><a href="#" className="nav-icon">03 Technology</a></li>
          </ul>
        </nav>
    );
};

export default Nav;