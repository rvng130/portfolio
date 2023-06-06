import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Game from './pages/Game';
import About from './pages/About';

import './styles/App.css';


//Under Everything Else
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/game" element={<Game />} />      
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
export default App;
