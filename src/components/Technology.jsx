import Nav from './Nav';
import { React, useState } from 'react';
import data from './data.js';

export default function Technology() {
  const [technology] = useState(data.technology);
  const [index, setIndex] = useState(0);
  const { name, description } = technology[index];
    return (
        <>
          <section className="tech">
            <Nav />
            <main className="grid-container--tech"> 
              <h1 className="numbered-title"><span>03</span> SPACE LAUNCH 101</h1>
              <div className="tech-image" data={index}></div>
              <div className="dot-indicators flex flow">
                {technology.map((person, index) => (
                  <button 
                    key={index} onClick={() =>
                      setIndex(index)}>{index+1}
                  </button>
                ))}
              </div>

              <h3>THE TECHNOLOGY...</h3>
              <h2>{name}</h2>
              <p>{description}</p>

            </main>
          </section>
        </>
    )
}