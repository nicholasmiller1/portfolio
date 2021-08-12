import React from 'react';
import '../css/header.css';
import { HashLink as Link } from 'react-router-hash-link';

const handleMenuClick = () => {
    const menu = document.getElementById('nav-mobile-slideout');
    const burger = document.getElementById('nav-burger');
    const app = document.getElementById('App');
    menu.classList.toggle('expanded');
    burger.classList.toggle('expanded');
    app.classList.toggle('no-scroll');
}

const Header = ({title, subtitle, image}) => {
    return (
        <div className="header">
            <div className="nav">
                <Link to="/portfolio" className="nav-item nav-default">Home</Link>
                <Link to="/portfolio#about" className="nav-item nav-default" smooth>About</Link>
                <Link to="/projects" className="nav-item nav-default">Projects</Link>
                <Link to="#contact" className='nav-item nav-default' smooth>Contact</Link>
                <div className="nav-item nav-mobile">
                    <div id="nav-burger" onClick={handleMenuClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div id="nav-mobile-slideout">
                        <Link to="/portfolio" className="nav-mobile-item" onClick={handleMenuClick}>Home</Link>
                        <Link to="/portfolio#about" className="nav-mobile-item" smooth onClick={handleMenuClick}>About</Link>
                        <Link to="/projects" className="nav-mobile-item" onClick={handleMenuClick}>Projects</Link>
                        <Link to="#contact" className='nav-mobile-item' smooth onClick={handleMenuClick}>Contact</Link>
                    </div>
                </div>
            </div>

            {image && <img id="header-photo"src={require('../assets/header-photo.jpg').default} alt="Header Profile"/>}
            <div id="header-text">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}

export default Header;