import React from 'react';
import '../css/footer.css';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {HiMail} from 'react-icons/hi';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="socials">
                <a href="mailto:nicholascmiller123@gmail.com"><HiMail/></a>
                <a href="https://www.linkedin.com/in/nicholas-c-miller-14a088205/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
                <a href="https://github.com/nicholasmiller1" target="_blank" rel="noreferrer"><FaGithub/></a>
            </div>
            <a href="https://drive.google.com/file/d/1FLSFRMmGmESRbvfNR7bGqH7QdB4xVzAB/view?usp=sharing" target="_blank" rel="noreferrer" id="footer-resume">Resume</a>
        </div>
    );
}

export default Footer;