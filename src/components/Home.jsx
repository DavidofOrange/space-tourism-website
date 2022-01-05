import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import Nav from './Nav.jsx';

export default function Home() {
    return (
      <>
        <section className='home'>
        <Nav />
          <main className='grid grid-container grid-container--home'>
            <div>
              <h1 className='text-accent fs-500 ff-sans-cond uppercase letter-spacing-1'>
                So, you want to travel to  
              <span className='fs-900 ff-serif text-white display-block'>Space</span></h1>
              <p className='text-accent fs-500 ff-sans-cond'>
                 Let’s face it; if you want to go to space, you might as well genuinely go to 
                 outer space and not hover kind of on the edge of it. Well sit back, and relax 
                 because we’ll give you a truly out of this world experience!
              </p>
            </div>
            <div>
                <Link className='large-button uppercase ff-serif text-dark bg-white' to='/destination'>
                  Explore
                </Link>
            </div>
          </main>
        </section>
    </>
    )
}