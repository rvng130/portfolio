import '../styles/blog.css';
import BlackRectangle from '../components/BlackRectangle.js';
import BeigeRectangle from '../components/BeigeRectangle.js';
import { useEffect, useState } from 'react';
function Blog() {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReveal(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`blog-page ${reveal ? 'reveal' : ''}`}>
      <div className="rectangle-container">
        <div className="black-rectangle"></div>
        <div className="beige-rectangle"></div>
      </div>
      <div className="link-list">
        <ul>
          <li className="link-item">
            <a href="#">Link 1</a>
          </li>
          <li className="link-item">
            <a href="#">Link 2</a>
          </li>
          <li className="link-item">
            <a href="#">Link 3</a>
          </li>
          {/* bruh */}
        </ul>
      </div>
      {/* bruh */}
    </div>
  );
}


export default Blog;
