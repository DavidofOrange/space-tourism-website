import Nav from './Nav';
import '../index.css';
import { React, useState } from 'react';
import data from '../starter-code/data.json';


export default function Destination() {
  const [destination] = useState(data.destinations);
  const [index, setIndex] = useState(2);
  const {name, images, description, distance, travel} = destination[index];
  const image = images.png;
  
    return (
        <>
          <section className='destination'>
          <Nav />
            <main className='grid-container grid-container--home'> 
              <article>         
                <h1 className='numbered-title'><span>01</span> Pick your destination</h1>
                <div className='planet-image flow' data={index}>
                </div>
              </article>

              <article>
                <div>
                  <div className='tab-list underline-indicators flex'>
                    {destination.map((planet, index) => (
                      <button className='transparent uppercase ff-sans-cond text-accent letter-spacing-2' 
                        key={index} onClick={() =>
                          setIndex(index)}>
                          {planet.name}
                      </button>
                    ))}
                  </div>
                </div>
                <h2 className='fs-800 uppercase ff-serif flow'>{name}</h2>
                <p className='flow'>{description}</p>
                <div className='flex flow'>
                    <div > 
                      <h3 className='text-accent fs-200 uppercase'>Avg. distance</h3>
                      <p className='fs-400 ff-serif uppercase'>{distance}</p>
                    </div>
                    <div>
                      <h3 className='text-accent fs-200 uppercase'>Est. travel time</h3>
                      <p className='fs-400 ff-serif uppercase'>{travel}</p>
                    </div>
                </div>
              </article>
             </main> 
           </section>
        </>
    )
}