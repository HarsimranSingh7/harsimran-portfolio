// components/MessageMe.jsx
import React, { useState } from 'react';
import './MessageMe.css';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

function MessageMe() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
       const serviceID = 'service_vhyqzyk';   // replace values for your set up of service with ""
         const templateID = 'template_kz71263'; // replace values from service templates from emailjs
        const userID  = 'TxeyC08mmF6stc4Md' // replace from emailjs service account setting page

        const templateParams = {
            from_name : email,
            message_content: message,
        };
         console.log("Before EmailJS Send: Template Parameters =", templateParams);
        emailjs.send(serviceID, templateID, templateParams, userID)
             .then((response) => {
                  setSuccess(true);
                   setError(null)
                  setEmail('');
                   setMessage('');
                    console.log("Mail send by emailjs service is successful with response : ", response);
              })
            .catch( (err) => {
                const errorDetail = err && err.message ?  err.message :  "Mail failed using EmailJS."
                  setError("There was an error in sending message:  using EmailJS:" + errorDetail);
                 console.error("transporter Email Error  from EmailJS object response =", err) ;
            });
    };
    return (
        <motion.section
    id="message-me-section"
    className="message-me-section"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }} // Trigger visibility earlier
    transition={{ duration: 0.8 }}
>
                <h2>Message Me</h2>
                <form onSubmit={handleSubmit} className="message-form">
                    <input
                         type="email"
                         placeholder='Your email'
                        value={email}
                         onChange={(e) => setEmail(e.target.value)}
                       required/>
                      <textarea
                         placeholder='Your message here'
                           value={message}
                            onChange={(e) => setMessage(e.target.value)}
                         required>
                     </textarea>
                       {error &&
                       <div style={{color: "red", marginTop: '0.8rem'}}>{error}</div>
                    }
                     {success &&
                       <div style={{color: 'green', marginTop: "0.8rem"}}>Message Sent!</div>
                    }
                   <button type='submit'>Send Message</button>
                </form>
          </motion.section>
   );
}

export default MessageMe;