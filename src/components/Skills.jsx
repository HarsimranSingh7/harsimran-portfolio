// components/Skills.jsx
import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import {Radar} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
  } from 'chart.js';
  ChartJS.register(
      RadialLinearScale,
      PointElement,
      LineElement,
      Filler,
      Tooltip,
    );

const skillsData = {
    labels: [
        "Programming Languages",
        "ML & Data Tools",
        "Cloud & DevOps",
        "Web Technologies",
        "Other tools",
    ],
    datasets: [
        {
            label: "Proficiency Level",
            data: [90, 95, 85, 80, 70],
            backgroundColor: "rgba(0, 255, 255, 0.2)",
            borderColor: "rgba(0, 255, 255, 1)",
            borderWidth: 2,
            pointBackgroundColor: "rgba(0, 255, 255, 1)",
            pointBorderColor: "rgba(0, 255, 255, 1)",
        }
    ]
}

const options = {
    scales: {
        r: {
             pointLabels: {
                color: '#333'
            },
            grid:{
                color: 'grey',
            },
             angleLines: {
                color: 'grey'
             },
             ticks: {
                 display: false
              },
              suggestedMin: 0,
                suggestedMax: 100,
         },
     },
    plugins:{
        tooltip:{
            enabled: true
        }
    },
    responsive: true,
    maintainAspectRatio: false,
}

const skillDetails = {
    "Programming Languages":
        "Proficient in Python, Java, R, JavaScript, C/C++, C#, SQL, Lisp, and more, creating diverse solutions across multiple platforms.",
    "ML & Data Tools":
        "Experienced in TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, Apache Airflow, and more, enabling the construction of sophisticated data models.",
    "Cloud & DevOps":
        "Expertise in Amazon Web Services, Google Cloud Platform, Docker, Kubernetes and other cloud solutions. Expert in building CI/CD pipelines",
    "Web Technologies":
         "Strong familiarity with HTML, CSS, JavaScript, React.js, Node.js, and more for building full stack websites.",
    "Other tools": "Tools like Git, VS code, Docker, Firebase, MongoDB and others to create high quality software.",
}


function Skills() {
    return (
        <motion.section
           id="skills"
            className="skills-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2>Skills</h2>
            <div className="skills-container">
               <motion.div className='chart-container'
                 initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
               >
                    <Radar data={skillsData} options={options}/>
               </motion.div>
                <motion.div
                    className="skills-list"
                     initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {Object.keys(skillDetails).map((skill, index) => (
                      <motion.div
                      key={index}
                        className="skill-item"
                        whileHover={{scale: 1.05}}
                           transition={{ duration: 0.2 }}
                      >
                            <h3>{skill}</h3>
                           <motion.div
                            className='skill-details'
                            initial={{ height: 0, opacity: 0 }}
                            whileHover={{ height: 'auto', opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            >
                            {skillDetails[skill]}
                           </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Skills;