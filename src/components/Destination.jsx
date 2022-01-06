import Nav from './Nav';
import '../index.css';
import { React, useState } from 'react';
import data from '../starter-code/data.json';
import moon from '../starter-code/assets/destination/image-moon.png';
import mars from '../starter-code/assets/destination/image-mars.png';
import europa from '../starter-code/assets/destination/image-europa.png';
import titan from '../starter-code/assets/destination/image-titan.png';


export default function Destination() {
  const [destination] = useState(data.destinations);
  const [index, setIndex] = useState(2);
  const {name, images, description, distance, travel} = destination[index];
  const image = images.png;
  
  console.log(index)
    return (
        <>
          <section className='destination'>
          <Nav />
            <main className='grid-container grid-container--home'> 
              <article>         
                <h1><span>01</span> Pick your destination</h1>
                <div className='planet-image' data={index}>
                </div>
              </article>

              <div>
                <nav>
                  <ul>
                    {destination.map((planet, index) => (
                      <button key={index} onClick={() =>
                        setIndex(index)}>
                        <li>{planet.name}</li>
                      </button>
                    ))}
                  </ul>
                </nav>
                <h2>{name}</h2>
                <p>{description}</p>
                <ul>
                  <li>Avg. distance {distance}</li>
                  <li>Est. travel time {travel}</li>
                </ul>
              </div>
             </main> 
           </section>
        </>
    )
}