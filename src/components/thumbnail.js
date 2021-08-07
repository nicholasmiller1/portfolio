import React from 'react';
import '../css/thumbnail.css';

const Thumbnail = ({link, image, title, description}) => {
    return (
        <div className="thumbnail">
            <img className="thumbnail-image" src={image} alt="Thumbnail"/>
            <h4 className="thumbnail-title">{title}</h4>
            <p className="thumbnail-description">{description}</p>
            <a href={link} className="thumbnail-link" target="_blank" rel="noreferrer">See the code</a>
        </div>
    );
}

export default Thumbnail;