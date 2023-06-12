import React, { useEffect, useState } from 'react';
import Drawing1 from '../components/Drawing1';

//home.css

import '../styles/home.css';
import ProfilePicture from '../components/ProfilePicture';

function Home({ setPage }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    //Delay the showing of the content to allow the fade-in effect
    setTimeout(() => {
      setShowContent(true);
    }, 1000);
  }, []);

  return (
    <div className={`fade-in ${showContent ? 'visible' : ''}`}>
      <title>Home Page</title>

      
  
        <div className='text-section'>
            <h2 className='above-name'>Hi, my name is</h2>
            <h1 className="name">Andrew Ishikawa.</h1>
            
            <p className="description slide-in">University of Connecticut (Computer Science B.S.)</p>
          <p>My passion not only lies in software and development but also
            the creativy that goes into the process of this medium.
             For me, it's not just about the end product. I enjoy the journey that comes with it.
             I see programming as a form of art, where lines of code become brushstrokes and algorithms become melodies.
             Building a website or coding a python script is no different than the process of art.</p>
        </div>
         
         
        <Drawing1 />
    

    </div>
  );
}

export default Home;
