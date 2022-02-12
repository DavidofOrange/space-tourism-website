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
              <h1 className="numbered-title numbered-title--tech"><span>03</span> SPACE LAUNCH 101</h1>
              <div className="tech-image flow" data={index}></div> 
              <div className="btns-container flow">
                {technology.map((person, index) => (
                  <button className="tech-btns ff-serif" 
                    key={index} onClick={() =>
                      setIndex(index)}>{index+1}
                  </button>
                ))}
              </div>
              <div className="tech-info flow">
                <h3 className="text-accent letter-spacing-3">THE TECHNOLOGY...</h3>
                <h2 className="fs-700 flow ff-serif uppercase">{name}</h2>
                <p className="tech-description text-accent fs-500 ff-sans-cond flow letter-spacing-3">{description}</p>
              </div>
            </main>
          </section>
        </>
    )
}