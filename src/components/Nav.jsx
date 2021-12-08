import React from "react";
import "../index.css";
import "./CSS/Nav.css";

function Nav() {
    return (
        <div className="nav-bar container flex">
            <div className="nav-icon">00 Home</div>
            <div className="nav-icon">01 Destination</div>
            <div className="nav-icon">02 Crew</div>
            <div className="nav-icon">03 Technology</div>
        </div>
    );
};

export default Nav;