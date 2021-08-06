import React from 'react';
import '../css/header.css';

const Header = () => {
    return (
        <div className="header">
            <img id="header-photo"src={require('../assets/header-photo.jpg').default} alt="Header Profile"/>
            <div id="header-text">
                <h1>Nicholas Miller</h1>
                <p>Motivated and passionate software developer</p>
            </div>
        </div>
    );
}

export default Header;