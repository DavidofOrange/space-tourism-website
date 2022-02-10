import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import Nav from './Nav.jsx';

export default function Home() {
    return (
      <>
        <section className='home'>
        <Nav />
          <main className='grid-container grid-container--home flow'>
            <div>
              <h1 className='numbered-title text-accent ff-sans-cond uppercase letter-spacing-3 flow'>
                So, you want to travel to</h1>
              <h1 className='text-accent fs-900 uppercase ff-serif text-white flow'>Space</h1>
              <p className='text-accent fs-500 ff-sans-cond flow letter-spacing-3'>
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