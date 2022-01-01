import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import Nav from './Nav.jsx';

export default function Home() {
    return (
        <section className='home'>
        <Nav />
          <div className='container font-white'>
            <div>
              <h1 className='text-accent fs-500 ff-sans-cond uppercase letter-spacing-1'>
                So, you want to travel to
              <span className='fs-900 ff-serif'>Space</span></h1>
              <p className='fs-400'>
                 Let’s face it; if you want to go to space, you might as well genuinely go to 
                 outer space and not hover kind of on the edge of it. Well sit back, and relax 
                 because we’ll give you a truly out of this world experience!
              </p>
            </div>
            <div>
                <Link className='large-button uppercase ff-serif fs-600 text-dark bg-white' to='/destination'>
                  <h1 className=''>Explore</h1>
                </Link>
            </div>
          </div>
        </section>

    )
}