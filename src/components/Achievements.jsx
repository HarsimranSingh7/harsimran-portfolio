// components/Achievements.jsx
import React from 'react';
import './Achievements.css';
import { motion } from 'framer-motion';

const achievementsData = [
    "Attained the highest grade (O grade) in 33 courses from first to sixth semester; awarded with 10 SGPA(Semester Grade Point Average) in fifth and eighth semesters.",
    "Winner of HackRx hackathon organized by Bajaj Finserv.",
     "Declared winner of “The Great India Hackathon” a 24-hour hackathon organized by Reskill and Microsoft Azure Development Community.",
     "Secured second position in HackWithHer 2.0 National Level Hackathon.",
];

function Achievements() {
    return (
        <motion.section
            className="achievements-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2>Achievements</h2>
            <ul className='achievements-list'>
                {achievementsData.map((achievement, index) =>(
                    <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                      {achievement}
                    </motion.li>
                ))}
            </ul>
        </motion.section>
    );
}

export default Achievements;