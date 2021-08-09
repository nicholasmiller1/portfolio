import React from 'react';
import '../css/projects.css';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Thumbnail from '../components/thumbnail';

const Projects = (props) => {
    return (
        <div className="projects">
            <Header title="Projects" subtitle="A collection of the projects I have worked on"/>
            <section className="projects-list">
                <Thumbnail link="https://github.com" image={require('../assets/header-photo.jpg').default} title="test project" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed mauris enim. Fusce eget quam ac ipsum porttitor tempor ac quis justo. Aenean placerat in ante sed accumsan. Vestibulum laoreet."/>
                <Thumbnail link="https://github.com" image={require('../assets/header-photo.jpg').default} title="test project" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed mauris enim. Fusce eget quam ac ipsum porttitor tempor ac quis justo. Aenean placerat in ante sed accumsan. Vestibulum laoreet."/>
                <Thumbnail link="https://github.com" image={require('../assets/header-photo.jpg').default} title="test project" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed mauris enim. Fusce eget quam ac ipsum porttitor tempor ac quis justo. Aenean placerat in ante sed accumsan. Vestibulum laoreet."/>
                <Thumbnail link="https://github.com" image={require('../assets/header-photo.jpg').default} title="test project" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed mauris enim. Fusce eget quam ac ipsum porttitor tempor ac quis justo. Aenean placerat in ante sed accumsan. Vestibulum laoreet."/>
                <Thumbnail link="https://github.com" image={require('../assets/header-photo.jpg').default} title="test project" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed mauris enim. Fusce eget quam ac ipsum porttitor tempor ac quis justo. Aenean placerat in ante sed accumsan. Vestibulum laoreet."/>
                <Thumbnail link="https://github.com" image={require('../assets/header-photo.jpg').default} title="test project" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed mauris enim. Fusce eget quam ac ipsum porttitor tempor ac quis justo. Aenean placerat in ante sed accumsan. Vestibulum laoreet."/>
            </section>
            <Footer/>
        </div>
    );
}

export default Projects;