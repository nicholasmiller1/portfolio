import React from 'react';
import '../css/header.css';

const Header = ({title, subtitle, image}) => {
    return (
        <div className="header">
            {image && <img id="header-photo"src={require('../assets/header-photo.jpg').default} alt="Header Profile"/>}
            <div id="header-text">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}

export default Header;