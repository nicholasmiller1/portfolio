import React from 'react';
import '../css/header.css';

const Header = ({pageName}) => {
    return (
        <div className="header">
            <h1>{pageName}</h1>
        </div>
    );
}

export default Header;