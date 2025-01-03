// components/Certifications.jsx
import React from 'react';
import './Certifications.css';
import { motion } from 'framer-motion';


const certificationsData = [
    {
        title: "Introduction to Web Development, University of California, Davis",
        link: null,
     },
    {
        title: "The Web Developer Bootcamp 2023 on Udemy",
        link: null,
      },
    {
       title: "Web Design for Everybody: Basics of Web Development & Coding by University of Michigan on Coursera",
       link: null,
    },
    {
        title: "Web Development Course by Scaler on InterviewBit",
        link: null,
    },
    {
        title: "The Complete 2022 Web Development Course on Udemy",
        link: null,
     },
    {
         title: "Web Development with JavaScript by MIT xPRO on InterviewBit",
         link: null,
     },
    {
        title: "IBM Applied AI on Coursera",
         link: null,
    },
    {
        title: "AI for Every One by Andrew Ng on Coursera",
         link: null,
    },
    {
       title: "Machine Learning (Stanford University) by Andrew Ng on Coursera",
         link: null,
    },
    {
       title: "Machine Learning Foundations: A Case Study Approach (University of Washington) on Coursera",
         link: null,
    },
    {
      title: "Machine Learning A-Z: Hands-On Python & R In Data Science on Udemy",
        link: null,
    },
    {
         title: "Machine Learning by Andrew Ng on Coursera",
         link: null,
     },
    {
         title: "AWS Fundamentals",
          link: null,
     },
    {
        title: "Certification in Cloud Computing by upGrad",
        link: null,
    },
     {
         title: "Principles of Cloud Computing by Microsoft on Coursera",
         link: null,
      },
    {
        title: "Blockchain Developer Nanodegree on Udacity",
        link: null,
    },
    {
       title: "Blockchain Specialization by SUNY on Coursera",
      link: null,
    },
     {
         title: "Introduction to Cybersecurity",
         link: null,
     },
     {
         title: "AWS Certified Cloud Practitioner",
          link: "https://www.credly.com/badges/ab141d54-f3f5-4983-bf44-facd879f11a5",
     },
     {
        title: "AWS Certified Solutions Architect",
         link: "https://www.credly.com/badges/d26d6074-03a7-435a-9b6e-bbd008940a43/linked_in?t=shuz7z",
     }
];

function Certifications() {
    return (
        <motion.section
            className="certifications-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2>Certifications</h2>
             <div className='certifications-list'>
                {certificationsData.map((cert, index) => (
                   <motion.div
                    key={index}
                     className='certification-item'
                      initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                    {cert.link ?
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">{cert.title}</a>
                    :
                    <span>{cert.title}</span>
                    }
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

export default Certifications;