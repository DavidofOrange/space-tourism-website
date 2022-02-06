import Nav from './Nav';
import { React, useState } from 'react';
import data from './data.js';

export default function Crew() {
  const [crew] = useState(data.crew);
  const [index, setIndex] = useState(0);
  const {name, role, bio} = crew[index];
    return (
        <>
        <section className="crew">
          <Nav />
          <main className="grid-container grid-container--crew">
            <h1 className="numbered-title"><span>02</span> Meet your crew</h1>
            <article className="crew-info ff-serif uppercase flow">
              <h2 className="crew-title text-accent fs-600 flow">{role}</h2>
              <h3 className="fs-700 flow">{name}</h3>
              <p className="flow">{bio}</p>
            </article>

            <div className="crew-image flow" data={index}></div>
        
            <div className="dot-indicators flex flow">
              {crew.map((person, index) => (
                <button className="" 
                  key={index} onClick={() =>
                    setIndex(index)}>
                </button>
              ))}
            </div>

          </main>
        </section>
        </>
    )
}