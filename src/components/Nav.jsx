import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import logo from './assets/shared/logo.svg';

function Nav() {

  const handleClick = () => {
    const navIcon = document.getElementById('nav-menu');
    const nav = document.querySelector('.primary-navigation');
    const isVisible = nav.getAttribute('data-visible');
    if (isVisible === 'false') {
      nav.setAttribute('data-visible', true);
      navIcon.setAttribute('aria-expanded', true);
    } else {
      nav.setAttribute('data-visible', false);
      navIcon.setAttribute('aria-expanded', false);
    }
  }
    return (
      <>
      <header className='primary-header flex'>
        <div >
          <Link className='logo' to='/'><img src={ logo } alt='main-logo'></img></Link>
        </div>
        <button id='nav-menu' onClick={handleClick} aria-expanded='false'><span className='sr-only'>Menu</span></button>
        <nav id='nav-bar'>
          <ul id='primary-navigation' className='primary-navigation underline-indicators flex' data-visible='false'>
            <li className='active'><Link className='ff-sans-cond uppercase text-white letter-spacing-2' 
            to='/'><span className='hidden-num' aria-hidden='true'>00</span>Home</Link></li>
            <li><Link className='ff-sans-cond uppercase text-white letter-spacing-2' 
            to='/destination'><span className='hidden-num' aria-hidden='true'>01</span>Destination</Link></li>
            <li><Link className='ff-sans-cond uppercase text-white letter-spacing-2' 
            to='/crew'><span className='hidden-num' aria-hidden='true'>02</span>Crew</Link></li>
            <li><Link className='ff-sans-cond uppercase text-white letter-spacing-2' 
            to='/technology'><span className='hidden-num' aria-hidden='true'>03</span>Technology</Link></li>
          </ul>
        </nav>
      </header>
      </>
    );
};
export default Nav;