import React from 'react'
import {FaGithub} from "react-icons/fa";
import {FiLinkedin} from "react-icons/fi"

const Footer = () => {
    return(
        <footer>
            <a href="" className="footer__logo">Picoty</a>

            <ul className="permalink">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
            <a href="https://github.com/Picoty" ><FaGithub/></a>
            <a href="https://www.linkedin.com/in/picoty-jemutai-3876812b0/"><FiLinkedin/></a>
            </div>

            <div className="footer__copyright">
               <small>&copy; Picoty Jemutai</small>
           </div>
        </footer>
    )
}

export default Footer