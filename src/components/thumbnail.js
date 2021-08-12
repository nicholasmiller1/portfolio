import React from 'react';
import '../css/thumbnail.css';
import {HiArrowNarrowRight} from 'react-icons/hi'

const Thumbnail = ({link, image, title, description}) => {
    return (
        <div className="thumbnail">
            <div id="thumbnail-content">
                <h4 className="thumbnail-title">{title}</h4>
                <p className="thumbnail-description" dangerouslySetInnerHTML={{__html: description}}></p>
                <img className="thumbnail-image" src={image} alt="Thumbnail"/>
            </div>
            <a href={link} className="thumbnail-link" target="_blank" rel="noreferrer">See the code <HiArrowNarrowRight style={{verticalAlign: 'middle'}}/></a>
        </div>
    );
}

export default Thumbnail;