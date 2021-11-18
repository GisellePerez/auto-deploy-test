import React from 'react';
import {
  HashRouter,
  Routes, // instead of "Switch"
  Route,
  Link,
} from "react-router-dom";
import Home from './views/Home';
import './App.css';
import About from './views/About';
import Contact from './views/Contact';

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>

      <HashRouter basename="/">
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
