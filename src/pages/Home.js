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
            <Header title="Nicholas Miller" subtitle="Motivated and passionate software engineer" image/>
            <section id="about">
                <div className="home-about">
                    <h1>About Me</h1>
                    <span>
                        <p>
                          Hi, I'm Nicholas Miller — a full-stack software engineer with experience in numerous frameworks and languages. 
                          I earned my B.S. in Computer Science from the University of Virginia along with a minor in Engineering Business. 
                          I am an avid learner who is always seeking to learn new things, expand my skill set, and sate my curiosity. 
                          As such, I often explore exciting concepts that tackle new areas of software engineering by engaging in my own personal 
                          projects. These have been in a variety of disciplines ranging from AI to 3D graphics to robotics and I love watching my ideas come to life.
                        </p>
                        <p>
                          Outside of software, I also enjoy a number of other hobbies including rock climbing, archery,
                          and videogames.
                        </p>
                    </span>
                    <img src={`${process.env.PUBLIC_URL}/assets/about-photo.JPEG`} alt="temporary" />
                </div>
            </section>
            <section className="home-projects">
                <h1>Highlighted Projects</h1>
                <h3>Some of my personal favorite projects that I've worked on</h3>
                <div id="home-project-container">
                    {projectsData.slice(0, 6).map((project, key) => {
                        return (
                            <Thumbnail title={project.title} description={project.description} image={`${process.env.PUBLIC_URL}/assets/${project.image}`} link={project.link} key={key}/>
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