// components/Publications.jsx
import React from 'react';
import './Publications.css';
import { motion } from 'framer-motion';

const publicationsData = [
    {
        title: "Dissecting the Implementation of Decentralized Applications through Blockchain Technology: An Analytical Perspective",
        description: "A deep dive into the architectures and implications of using decentralized applications using blockchain.",
        authors: "Singh, H., & Sharma, K.",
        publisher: "Wiley",
        date: "2023",
        background: "linear-gradient(45deg, #00ffff, #800080)",
    },
    {
        title: "Prediction of Coronavirus using various Machine Learning Algorithms",
        description: "A study using ML algorithms to predict the spread of the coronavirus.",
        authors: "Singh, H., & Sharma, V.",
        publisher: "International Conference on IoT, Communication and Automation Technology",
        date: "June 2023",
        background: "linear-gradient(45deg, #00ff7f, #0000ff)",
    },
    {
        title: 'Predictive Analysis of Stock Market Trends Using Machine Learning',
        description: "A research into predicting the stock market using ML algorithms.",
        authors: "Singh, H., Verma, S.",
        publisher: "International Journal of Artificial Intelligence & Applications",
        date: "March 2024 (Expected)",
        background: "linear-gradient(45deg, #ff0000, #00ff00)",
    },
    {
        title: 'Sustainable Urban Development: A Machine Learning Approach to Predicting Gentrification Trends',
        description: "Research into using ML algorithms to predict gentrification trends.",
        authors: "Aurora, Z., Singh, H.",
        publisher: "Journal of Urban Development and Sustainability",
        date: "June 2024 (Expected)",
        background: "linear-gradient(45deg, #ff00ff, #00ffff)",
    },
];

function Publications() {
    return (
        <motion.section
            className="publications-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2>Publications</h2>
            <div className="publications-list">
                {publicationsData.map((pub, index) => (
                    <motion.div
                        key={index}
                        className="publication-item"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <div className='abstract-image' style={{background: pub.background}}></div>
                        <div className='publication-details'>
                            <h3>{pub.title}</h3>
                            <p>{pub.authors}</p>
                            <p>{pub.publisher} ({pub.date})</p>
                            <p className='description'> {pub.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

export default Publications;