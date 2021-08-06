import React from 'react';
import '../css/thumbnail.css';
import {Link} from 'react-router-dom';

const Thumbnail = ({link, image, title, category}) => {
    return (
        <div className="thumbnail">
            <Link to={link}>
                <div className="thumbnail-image">
                    <img src={image} alt="Thumbnail"/>
                </div>
                <div className="thumbnail-title">{title}</div>
                <div className="thumbnail-categroy">{category}</div>
            </Link>
        </div>
    );
}

export default Thumbnail;