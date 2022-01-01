import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import logo from '../starter-code/assets/shared/logo.svg';
import { NavLink } from 'react-router-dom';


function Nav() {
    return (
      <>
      <header className='primary-header'>
        <div className='main-logo' alt='main-logo'>
          <Link to='/'><img src={ logo } alt='main-logo'></img></Link>
        </div>
        <nav className='flex'>
          <ul className='primary-navigation underline-indicators flex'>
            <li className='active'><Link className='ff-sans-cond uppercase font-white letter-spacing-2' 
            to='/'><span>00 Home</span></Link></li>
            <li><Link className='ff-sans-cond uppercase font-white letter-spacing-2' 
            to='/destination'><span>01 Destination</span></Link></li>
            <li><Link className='ff-sans-cond uppercase font-white letter-spacing-2' 
            to='/crew'><span>02 Crew</span></Link></li>
            <li><Link className='ff-sans-cond uppercase font-white letter-spacing-2' 
            to='/technology'><span>03 Technology</span></Link></li>
          </ul>
        </nav>
      </header>
      </>
    );
};

export default Nav;