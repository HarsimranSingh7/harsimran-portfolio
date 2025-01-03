// components/Extracurricular.jsx
import React from 'react';
import './Extracurricular.css';
import { motion } from 'framer-motion';

const extracurricularData = [
     "Led C2S2 Dhwani, the official music club of the university (07/2021 - 02/2022), and guided the club to victory in over 10 competitions across India and internationally.",
    "Winner of Virtuoso(solo instrumental competition), Mood Indigo 2021(Asia’s largest college fest), organized by IIT Bombay.",
    "Volunteered at ‘Prayaas’, a student-run NGO in Patiala, where we taught basic computer skills to underprivileged children.",
     "Won North India Inter-University Basketball Championship.",
    "Contributed to the university's achievement of an A+ ranking(NAAC accredited",
];

function Extracurricular() {
    return (
        <motion.section
            className="extracurricular-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2>Extracurricular Activities</h2>
            <ul className='extracurricular-list'>
                {extracurricularData.map((extracurricular, index) =>(
                   <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                       {extracurricular}
                    </motion.li>
                ))}
            </ul>
        </motion.section>
    );
}

export default Extracurricular;