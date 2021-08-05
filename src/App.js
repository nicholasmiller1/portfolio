import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';

function App() {
  return (
    <Router>
      <div className="App">

        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        
        <div className="nav">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/#about" className="nav-item">About</Link>
            <Link to="/projects" className="nav-item">Projects</Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
