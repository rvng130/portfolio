import React, { useEffect, useState } from 'react';

//home.css
import ProfilePicture from '../components/ProfilePicture.js';
import '../styles/home.css';

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
          <p>University of Connecticut (Computer Science B.S.)</p>
        </div>
         
        <div className='description'>
          <p>At the heart of it all, I stand for creativity. 
             For me, it's not just about the end product;
             it's about the journey of creating.
             I see programming as a form of art, where lines of code become brushstrokes and algorithms become melodies.
             Building a website or crafting a video game is akin to composing a symphony or painting a masterpiece.</p>
        </div>
        
        <ProfilePicture altText="Profile Picture" />

    </div>
  );
}

export default Home;
