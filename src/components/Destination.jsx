import Nav from './Nav';

export default function Destination() {
    return (
        <>
          <section className='destination'>
          <Nav />
            <main> 
              <div>         
                01 Pick your destination
                <div>
                  <img src=''></img>
                </div>
              </div>

              <div>
                <nav>
                  <ul>
                    <li>Moon</li>
                    <li>Mars</li>
                    <li>Europa</li>
                    <li>Titan</li>
                  </ul>
                </nav>
                <h1>Moon</h1>
                <p>
                    See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                    regain perspective and come back refreshed. While you’re there, take in some history 
                    by visiting the Luna 2 and Apollo 11 landing sites.
                </p>
                <ul>
                  <li>Avg. distance 384,400 km</li>
                  <li>Est. travel time 3 days</li>
                </ul>
              </div>
             </main> 
           </section>
        </>
    )
}