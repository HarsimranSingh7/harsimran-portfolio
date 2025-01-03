// components/Experience.jsx
import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';

const experienceData = [
    {
        title: 'Software Engineer - Fidelity International',
        time: '08/2023 - 08/2024',
        description:
            "At Fidelity, I wasn't just a software engineer; I was a performance architect. I optimized core billing databases to handle a surge in client data, boosting query response times by 40% and cutting down redundancy by 15%. These improvements led to a significant reduction in operational overhead and increased client satisfaction. Also designed a system that increased 99.9% uptime, and reduced deployment errors by 40%. I also automated validation, reducing manual errors, and enhancing client satisfaction.",
    },
    {
        title: 'Data Science Researcher - Quark Software',
        time: '01/2023 - 08/2023',
        description:
            "During my time at Quark, I spearheaded a project that redefined anomaly detection using TensorFlow and PyTorch, achieving 92% accuracy, and reducing manual reviews by 60%. I also built an NLP-based classification model, making assets easier to categorize, and boosting accuracy to 85%. My work involved optimizing a real-time processing pipeline using Apache Kafka and Spark, improving processing time by 35%.",
    },
     {
        title: 'Machine Learning Researcher - National Cheng Kung University',
        time: '06/2022 - 01/2023',
        description:
            "At the forefront of AI research, I developed innovative CNN and RNN models for detecting cardiovascular disease, increasing detection accuracy by 32% and early risk detection by 25%. I also developed a robust, Flask-based data processing platform that reduced data processing time by 42%.",
    },
    {
         title: 'Software Engineer - Sphinxindus Analytics',
         time: '09/2021 - 03/2022',
        description:
             "At Sphinxindus Analytics, I used my skills in Scikit-Learn and Numpy to improve data accuracy by 15%. By optimizing ETL using Dask and Apache Airflow I reduced data processing times by 30%. My emphasis was always on performance optimization and data integrity, driving results that directly impacted the bottom line.",
    },
     {
        title: 'Data Science - AlmaBetter',
        time: '01/2021 - 08/2021',
        description:
            "Gained proficiency in Python, R, SQL, and data visualization tools such as Tableau and PowerBI through intensive learning and training sessions. Utilized these skills to automate data extraction and cleaning processes, reducing time spent on data preparation. Applied theoretical knowledge to real-world business challenges, developing effective data models in collaboration with cross-functional teams. One such model led to a 15% increase in marketing campaign effectiveness. Analyzed complex datasets using machine learning algorithms such as linear regression and random forest. Developed predictive models that informed business strategies. Presented clear visualizations and reports to stakeholders using Tableau, contributing to data-driven decision-making. This improved client satisfaction scores by 25%.",
    },
    {
        title: 'Technical Content Writer - Eracost',
        time: '10/2020 - 12/2020',
        description:
            "Wrote over 30 articles/blogs for clients, based on Java, C, C++, and various other trending technologies, according to the assigned tasks. Managed the startup's website via the latest SEO techniques to increase traffic by 20% and improve the overall site. Additionally, took the responsibility of hiring new interns for the startup as well as help in managing the social media handles of the company. Successfully doubled my initial stipend at the end of the internship.",
    },
    {
        title: 'Full-Stack Developer - Jarvics Technologies',
        time: '03/2020 - 08/2020',
        description:
            "Developed and maintained code for in-house and client websites primarily using JavaScript, HTML, CSS, and PHP . Led the development of a customer web portal, resulting in improved client satisfaction by 20%. Addressed a critical bug in an external client’s website, which increased the client’s site uptime by 15%. Collaborated with a team of 5 developers to develop a web-based CRM system for a major client. Mastered the use of APIs in JavaScript to dynamically display content on websites, reducing the time to load pages.",
    },
     {
        title: 'Java Developer - Limish',
        time: '11/2019 - 02/2020',
        description:
            "Built Java applications for Limish, a software company with over 500 clients worldwide, during a four-month internship. Fixed bugs and added features using Scrum, code reviews, and testing tools. Worked closely with senior developers, testers, and clients to deliver high-quality software solutions. Acquired new skills in Spring Boot, Hibernate, and Maven, which increased my productivity and efficiency.",
    },
];

function Experience() {
    return (
        <motion.section
           id="experience"
            className="experience-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2>Experience</h2>
            <div className="timeline">
                {experienceData.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="timeline-item"
                         initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <div className="timeline-content">
                            <h3>{exp.title}</h3>
                            <span className="timeline-time">{exp.time}</span>
                            <motion.p
                            initial={{ height: "0px", opacity: 0 }}
                             whileHover={{ height: "auto", opacity: 1}}
                             transition={{ duration: 0.4 }}
                            className="timeline-desc"
                            >{exp.description}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

export default Experience;