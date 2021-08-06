import React from 'react';
import '../css/home.css';
import Header from '../components/header.js';
import Footer from '../components/footer.js';

const Home = (props) => {
    return (
        <div className="home">
            <Header pageName="Home"/>
            <div className="home-about" id="about">
                <h1>About Me</h1>
            </div>
            <div className="home-projects">
                <h1>Highlighted Projects</h1>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;