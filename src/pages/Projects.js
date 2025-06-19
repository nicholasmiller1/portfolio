import React from 'react';
import '../css/projects.css';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Thumbnail from '../components/thumbnail';
import projectsData from '../projects.json';

const Projects = (props) => {
    return (
        <div className="projects" id="top">
            <Header title="Projects" subtitle="A collection of the personal projects I have worked on"/>
            <section className="projects-list">
                {projectsData.map((project, key) => {
                    return (
                        <Thumbnail title={project.title} description={project.description} image={require(`../assets/${project.image}`).default} link={project.link} key={key}/>
                    );
                })}
            </section>
            <Footer/>
        </div>
    );
}

export default Projects;