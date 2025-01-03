import React, { useState } from 'react';
import './ProjectCard.css';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ProjectCard({ project }) {
    const [showCode, setShowCode] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(project.code);
        alert("Code copied");
    };

    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="project-content">
                <h3>{project.title}</h3>
                <motion.p className="project-description">{project.description}</motion.p>
                <div className="tech-container">
                    {project.tech &&
                        project.tech.map((item, index) => (
                            <span key={index} className="tech-item">
                                {item}
                            </span>
                        ))}
                </div>
                {project.code && (
                    <motion.div
                        className="code-container"
                        initial={{ height: 0, opacity: 0 }}
                        animate={showCode ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <SyntaxHighlighter
                            language="javascript"
                            style={dracula}
                            showLineNumbers
                        >
                            {project.code}
                        </SyntaxHighlighter>
                        <button onClick={handleCopy}>Copy Code</button>
                        <button onClick={() => setShowCode(!showCode)}>
                            {showCode ? 'Hide Code' : 'Show Code'}
                        </button>
                    </motion.div>
                )}
                {project.title === 'Conversational SQL: Streamlining Data Access with Natural Language' && (
                    <a href="https://texttosql-p.streamlit.app/" target="_blank" rel="noopener noreferrer">
                        Visit Project
                    </a>
                )}
                {project.title === 'NBA GPT: Real-Time NBA Insights Chatbot' && (
                    <a href="https://nba-gpt-13.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Visit Project
                    </a>
                )}
            </div>
        </motion.div>
    );
}

export default ProjectCard;
