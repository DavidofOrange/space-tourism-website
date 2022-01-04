import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import logo from '../starter-code/assets/shared/logo.svg';


function Nav() {

  const handleClick = () => {
    const nav = document.querySelector('.primary-navigation');
    const isVisible = nav.getAttribute('data-visible');
    if (isVisible === 'false') {
      nav.setAttribute('data-visible', true);
    } else {
      nav.setAttribute('data-visible', false);
    }
  }
  
    return (
      <>
      <header className='primary-header flex'>
        <div >
          <Link className='logo' to='/'><img src={ logo } alt='main-logo'></img></Link>
        </div>
        <button id='nav-menu' onClick={handleClick}><span className='sr-only'>Menu</span></button>
        <nav id='nav-bar'>
          <ul id='primary-navigation' className='primary-navigation underline-indicators flex' data-visible='false'>
            <li className='active'><Link className='ff-sans-cond uppercase text-white letter-spacing-2' 
            to='/'><span>00 Home</span></Link></li>
            <li><Link className='ff-sans-cond uppercase text-white letter-spacing-2' 
            to='/destination'><span>01 Destination</span></Link></li>
            <li><Link className='ff-sans-cond uppercase text-white letter-spacing-2' 
            to='/crew'><span>02 Crew</span></Link></li>
            <li><Link className='ff-sans-cond uppercase text-white letter-spacing-2' 
            to='/technology'><span>03 Technology</span></Link></li>
          </ul>
        </nav>
      </header>
      </>
    );
};

export default Nav;