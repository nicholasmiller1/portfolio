import React from 'react';
import '../css/home.css';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Thumbnail from '../components/thumbnail.js';
import {HashLink as Link} from 'react-router-hash-link';
import projectsData from '../projects.json';

const Home = (props) => {
    return (
        <div className="home">
            <Header title="Nicholas Miller" subtitle="Motivated and passionate software developer" image/>
            <section id="about">
                <div className="home-about">
                    <h1>About Me</h1>
                    <span>
                        <p>My name is Nicholas Miller and I am a 2nd year undergraduate student at the University of Virginia 
                            majoring in Computer Science and minoring in Engineering Business. I enjoy working in a wide variety 
                            of fields of software development ranging from computer vision to AI and machine learning to robotics. 
                            I try to learn something new or improve upon old skills with every project.
                        </p> 
                        <p>Outside of school and work, I also enjoy a number of other hobbies. These include rock climbing, archery,
                            playing videogames, and working on personal projects.
                        </p>
                    </span>
                    <img src={require('../assets/about-photo.JPEG').default} alt="temporary" />
                </div>
            </section>
            <section className="home-projects">
                <h1>Highlighted Projects</h1>
                <h3>Some of my personal favorite projects that I've worked on</h3>
                <div id="home-project-container">
                    {projectsData.slice(0, 6).map((project, key) => {
                        return (
                            <Thumbnail title={project.title} description={project.description} image={require(`../assets/${project.image}`).default} link={project.link} key={key}/>
                        );
                    })}
                </div>
                <Link to="/projects#top" id="projects-button">See More</Link>
            </section>
            <Footer/>
        </div>
    );
}

export default Home;