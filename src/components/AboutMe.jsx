import React, { useEffect, useState } from 'react';
import './AboutMe.css';
import { motion } from 'framer-motion';
import myImage from '../assets/myImage.png';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function TypingAnimation() {
    const texts = [
        "I blend creativity and logic",
        "I build impactful solutions",
        "I create intelligent systems",
        "I love solving complex problems",
    ]; // Array of sentences to cycle through
    const [currentText, setCurrentText] = useState('');
    const [index, setIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0); // Tracks the current sentence
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const fullText = texts[textIndex];

            if (!isDeleting && index < fullText.length) {
                // Typing forward
                setCurrentText((prev) => prev + fullText[index]);
                setIndex((prev) => prev + 1);
            } else if (isDeleting && index > 0) {
                // Deleting backward
                setCurrentText((prev) => prev.slice(0, -1));
                setIndex((prev) => prev - 1);
            } else if (!isDeleting && index === fullText.length) {
                // Pause after typing
                setTimeout(() => setIsDeleting(true), 1000); // Pause for 1 second
            } else if (isDeleting && index === 0) {
                // Move to the next sentence
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length); // Cycle to the next text
            }
        }, isDeleting ? 50 : 100); // Typing speed: 100ms, deleting speed: 50ms

        return () => clearInterval(interval);
    }, [index, isDeleting, textIndex, texts]);

    return <h1 className="typing-animation">{currentText}</h1>;
}

function AboutMe() {
    return (
        <section id="hero-section" className="hero-section">
            {/* Animated Gradient Background */}
            <motion.div
                className="animated-bg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <motion.div
                    className="monotone-bg"
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    animate={{ opacity: 0.8, filter: 'blur(0px)' }}
                    transition={{ duration: 2 }}
                />
            </motion.div>
            <div className="hero-content">
                <div className="image-container">
                    <motion.img
                        src={myImage}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                        alt="profile"
                    />
                </div>
                {/* Typing Animation */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <TypingAnimation />
                </motion.div>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    I'm a software engineer and machine learning researcher, building impactful solutions.
                </motion.p>
                <motion.div
                    className="contact-links"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    <a href="mailto:harsimransingh147001@gmail.com">
                        <FaEnvelope />
                    </a>
                    <a href="tel:+14165578049">
                        <FaPhone />
                    </a>
                    <a href="https://github.com/HarsimranSingh7">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/harsimransingh13/">
                        <FaLinkedin />
                    </a>
                </motion.div>
                <motion.div>
                    <p>
                        From a young age, the intersection of logic and creativity has always fascinated me. I've been captivated by the power of code to not only solve complex problems but to create entirely new realities.
                        My passion lies in building intelligent systems that are not just efficient but also deeply impactful. When not immersed in code, you will find me exploring the possibilities of machine learning and AI, trying to turn science fiction into reality.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default AboutMe;
