import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';

function App() {
  return (
    <Router>
      <div className="App">

        <Route exact path="/portfolio" component={Home} />
        <Route path="/projects" component={Projects} />
        
        <div className="nav">
            <Link to="/portfolio" className="nav-item">Home</Link>
            <Link to="/portfolio#about" className="nav-item" smooth>About</Link>
            <Link to="/projects" className="nav-item">Projects</Link>
            <Link to="#contact" className='nav-item' smooth>Contact</Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
