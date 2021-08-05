import React from 'react';
import '../css/projects.css';
import Header from '../components/header.js';
import Footer from '../components/footer.js';

const Projects = (props) => {
    return (
        <div className="projects">
            <Header pageName="Projects"/>
            <Footer/>
        </div>
    );
}

export default Projects;