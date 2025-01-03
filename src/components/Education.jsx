// components/Education.jsx
import React from 'react';
import './Education.css';
import { motion } from 'framer-motion';

function Education() {
    return (
        <motion.section
          id="education"
            className="education-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2>Education</h2>
             <div className='education-list'>
                <h3>York University – MSc in Computer Science (specialization in AI)</h3>
                <p>09/2024 - 05/2026</p>
                <h3>Chitkara University – BSc in Computer Science</h3>
                <p>08/2019 - 08/2023</p>
            </div>
        </motion.section>
    );
}

export default Education;