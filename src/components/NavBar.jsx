import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import './NavBar.css';
import { Link } from 'react-scroll';

function NavBar() {
    const { scrollY } = useScroll();
    const [navBackground, setNavBackground] = useState(false);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            if (latest > 100) {
                setNavBackground(true);
            } else {
                setNavBackground(false);
            }
        });
    }, [scrollY]);

    return (
        <motion.nav
            className={`navbar ${navBackground ? 'nav-scrolled' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Updated Logo */}
            <div className="logo">
                <span className="logo-initial">H</span>arsimran <span className="logo-highlight">Singh</span>
            </div>

            {/* Navigation Links */}
            <div className="nav-links">
                <Link activeClass="active" to="hero-section" spy={true} smooth={true} offset={-100} duration={500}>
                    About
                </Link>
                <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-100} duration={500}>
                    Experience
                </Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500}>
                    Skills
                </Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500}>
                    Projects
                </Link>
                <Link activeClass="active" to="education" spy={true} smooth={true} offset={-100} duration={500}>
                    Education
                </Link>
                <Link
                    activeClass="active"
                    to="message-me-section"
                    spy={true}
                    smooth={true}
                    offset={200}
                    duration={500}
                >
                    Message Me
                </Link>
            </div>
        </motion.nav>
    );
}

export default NavBar;
