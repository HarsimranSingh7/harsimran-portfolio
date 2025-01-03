// components/Footer.jsx
import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';
import {FaGithub, FaLinkedin, FaEnvelope, FaPhone} from 'react-icons/fa';


function Footer() {
    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <p>© {new Date().getFullYear()} Harsimran Singh</p>
            <div className='contact-links'>
                <a href="mailto:harsimransingh147001@gmail.com">
                   <FaEnvelope/>
                </a>
                  <a href="tel:+14165578049">
                    <FaPhone/>
                </a>
                <a href="https://github.com/HarsimranSingh7">
                  <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/harsimransingh13/">
                  <FaLinkedin/>
                </a>
            </div>
        </motion.footer>
    );
}

export default Footer;