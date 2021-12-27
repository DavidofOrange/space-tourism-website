import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import '../App.css';
import logo from '../starter-code/assets/shared/logo.svg';

import { NavLink } from 'react-router-dom';


function Nav() {
    return (
      <>
        <nav className='nav-bar container flex'>
          <div className='main-logo' alt='main-logo'>
            <Link to='/'><img src={ logo } alt='main-logo'></img></Link>
          </div>
          <ul >
            <li><Link to='/'><span>00 Home</span></Link></li>
            <li><Link to='/destination'><span>01 Destination</span></Link></li>
            <li><Link to='/crew'><span>02 Crew</span></Link></li>
            <li><Link to='/technology'><span>03 Technology</span></Link></li>
          </ul>
        </nav>
      </>
    );
};

export default Nav;