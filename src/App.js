import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';

function App() {
  return (
    <Router>
      <div id="App" className="App">
        <Route exact path="/portfolio" component={Home} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
