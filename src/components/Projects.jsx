// components/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import { motion } from 'framer-motion';

const projectsData = [
    {
        title: 'Conversational SQL: Streamlining Data Access with Natural Language',
        description:
             "This project is more than just a natural language to SQL converter; it's a data accessibility revolution. By leveraging Google's cutting-edge Gemini API, I built an interactive platform that translates natural language questions into precise SQL queries, reducing the time required for data analysis by a staggering 80%. But the real innovation lies in the intuitive Streamlit interface, which empowers even non-technical users to engage with complex databases. Furthermore, the application features advanced data visualizations using Seaborn and Matplotlib, increasing data analysis efficiency by 50% and was deployed using a robust CI/CD pipeline on Streamlit Cloud with GitHub version control. This wasn't just about efficiency; it was about making data truly democratic.",
        tech: ['Python', 'Streamlit', 'Google Gemini', 'SQL', 'Seaborn', 'Matplotlib'],
        code: `
        # Sample Python code using Streamlit for SQL Conversion
        import streamlit as st
        from google.generativeai import GenerativeModel

        st.title("Natural Language to SQL Converter")

        user_query = st.text_input("Enter your natural language query")

        if st.button("Convert to SQL"):
           if user_query:
            st.write("SELECT * FROM users WHERE name LIKE '%user_query%';")
        else:
           st.write("Enter a query to convert")
       `
    },
    {
        title: 'NBA GPT: Real-Time NBA Insights Chatbot',
        description:
            "This wasn't just another chatbot; it's a deep dive into the world of real-time NBA data. I engineered a sophisticated Retriever-Augmented Generation (RAG) chatbot that provides real-time insights and stats. The magic behind the curtain was integrating Open AI APIs, LangChain.js, and Next.js along with vector embeddings to generate timely and relevant data. This setup reduced API costs and query latency by 30% using pre-fetched responses. The scalable interface was deployed on Vercel to ensure availability.",
        tech: ['JavaScript', 'React.js', 'Next.js', 'OpenAI', 'Langchain.js'],
           code: `
        // Sample Javascript code for the chatbot
        import React, { useState } from 'react';

        function Chatbot() {
            const [messages, setMessages] = useState([]);
            const [input, setInput] = useState('');

            const handleSendMessage = () => {
                setMessages([...messages, { text: input, sender: 'user' }]);
                setInput('');
            }

            return (
                <div>
                    <div>
                         {messages.map((message, index) => (
                            <div key={index}> {message.sender}: {message.text}</div>
                        ))}
                     </div>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                    <button onClick={handleSendMessage}>Send</button>
               </div>
            )
        }

       `
    },
    {
        title: 'Predictive Maintenance for Industrial Machinery',
        description:
            "This project tackles the challenge of costly unplanned downtime in industrial settings. Using time-series data, advanced statistical methods, and deep learning, I developed a predictive maintenance system that can forecast potential equipment failures with 90% accuracy. This not only reduces the risk of downtime but can also optimize maintenance schedules. The core innovation includes feature engineering and a modular pipeline that can be adapted to different types of machinery, making it a versatile tool for any industrial setting. It uses technologies like scikit-learn, pandas, and TensorFlow.",
        tech: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Time Series Data'],
    },
    {
        title: 'AI-Powered Personalized Education Platform',
        description:
            "I am deeply passionate about using technology for social good, and this project embodies this passion. I developed an adaptive learning platform that tailors educational content to each student's unique learning style and pace. This system uses a hybrid recommendation algorithm that combines collaborative filtering with content-based filtering. It provides personalized learning paths, automatically adapts difficulty, and provides smart recommendations for further studies. This application uses React.js, python, and Tensorflow.",
        tech: ['Python', 'React.js', 'TensorFlow', 'Recommendation Systems'],
    },
    {
        title: 'Autonomous Drone Navigation Using Deep Reinforcement Learning',
        description:
            "This cutting-edge project uses advanced deep reinforcement learning to develop an autonomous navigation system for drones. Using sophisticated neural networks, I've created an algorithm that learns optimal flight paths and makes real-time decisions based on changing environment conditions and is able to avoid dynamic obstacles. This system has the potential to revolutionize drone applications across various sectors, from logistics to surveillance, and everything in-between. It uses technologies like Python, TensorFlow and PyTorch.",
        tech: ['Python', 'TensorFlow', 'PyTorch', 'Reinforcement Learning'],
    },
     {
        title: 'Predictive Analysis of NBA Championship Winners and MVPs',
        description:
            "Cleaned and preprocessed the NBA dataset, handling missing values and outliers. Normalized numerical features for better model performance. Created new features based on team statistics (e.g., win-loss ratio, average points per game) and player performance metrics (e.g., points, rebounds, assists per game). These features were crucial in improving the model’s predictive power. Implemented a deep learning model using TensorFlow and Keras. The model architecture included multiple dense layers with dropout for regularization. Used the Adam optimizer and mean squared error as the loss function. Trained the model on a GPU for faster computation. Used a validation set to tune hyperparameters and prevent overfitting. Evaluated the model’s performance using metrics such as accuracy and F1 score. Visualized the model’s predictions using Matplotlib and Seaborn. Presented the project, explaining the model’s predictions and their implications for future NBA seasons.",
        tech: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'Numpy'],
     },
    {
        title: 'Virtual Reality-Based Learning Environment',
         description:
            "Developed interactive VR content for various subjects such as history, science, and geography. This involved creating 3D models of historical monuments, scientific concepts, and geographical features using Unity and C#. Also implemented animations and interactive elements to make the content more engaging. Designed an intuitive user interface within the VR environment. This included a navigation menu, interactive buttons, and information pop-ups. Ensured the interface adheres to VR design principles for optimal user comfort and accessibility. Integrated the application with the Oculus SDK to enable its use with Oculus VR headsets. Implemented functionality for VR controllers, allowing users to interact with the VR content using hand gestures and button presses. Conducted user testing sessions with a group of students and teachers. Gathered feedback on the usability of the application, the effectiveness of the VR content in aiding learning, and overall user satisfaction. Iterated on the design and functionality of the application based on this feedback. The application was tested in a local school with a group of 30 students. It received positive feedback for its ability to engage students and make learning more enjoyable. Teachers also noted an improvement in students’ understanding of complex concepts. The project was recognized at a tech innovation contest, receiving the ‘Most Innovative Use of VR in Education’ award. This recognition validates the novelty and effectiveness of the project. The findings from the user testing sessions were published in a local education technology journal. The publication discusses the potential of VR in education and shares insights from the testing sessions.",
       tech: ['C#', 'Unity', 'Oculus SDK', 'VR Development'],
    },
     {
        title: 'Eco-Tracker: A Full-Stack Web Application for Environmental Impact Monitoring',
        description:
            "Designed and implemented the front-end using React.js. Created interactive components for user input, data visualization, and feedback presentation. Developed a back-end server using Node.js and Express.js. Implemented RESTful APIs for user registration, data input, and feedback generation. Used MongoDB for storing user data and environmental impact data. Implemented efficient data retrieval methods for real-time feedback generation. Conducted user testing sessions to gather feedback on the application’s usability and effectiveness. Iterated on the design and functionality based on user feedback.",
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Full Stack Development'],
    },
];

function Projects() {
    return (
        <motion.section
           id="projects"
            className="projects-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2>Projects</h2>
            <div className="project-list">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </motion.section>
    );
}

export default Projects;