import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section id='home'>
          <div className='home-content'>
            <article className='home-text'>
              <h2>So, you want to travel to</h2>
              <h1>Space</h1>
              <p>
                 Let’s face it; if you want to go to space, you might as well genuinely go to 
                 outer space and not hover kind of on the edge of it. Well sit back, and relax 
                 because we’ll give you a truly out of this world experience!
              </p>
            </article>
            <article>
              <button className='explore-btn'>
                <Link to='/destination'>
                  <h1 className='fs-400 uppercase'>Explore</h1>
                </Link>
              </button>
            </article>
          </div>
        </section>

    )
}