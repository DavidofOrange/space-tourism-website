import Nav from './Nav';
import { React, useState } from 'react';
import data from '../starter-code/data.json';

export default function Crew() {
  const [crew] = useState(data.crew);
  const [index, setIndex] = useState(0);
  const {name, role, bio} = crew[index];
    return (
        <>
          <Nav />
          <main className="crew">
            <h1 className="numbered-title"><span>02</span> Meet your crew</h1>
            <article className="crew-info ff-serif uppercase">
              <h2 className="fs-600">{role}</h2>
              <h3 className="fs-700">{name}</h3>
              <p>{bio}</p>
            </article>
            <div className="crew-image" data={index}></div>

            <div className="flex">
              {crew.map((person, index) => (
                <button className="" 
                  key={index} onClick={() =>
                    setIndex(index)}>
                    
                </button>
              ))}
            </div>

          </main>
        </>
    )
}