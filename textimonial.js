
import React from 'react';
import { motion } from 'framer-motion';
import './portfolio.css';
import { testimonials } from './details';
import { Container } from 'react-bootstrap';
import nodeIcon from '../assets/icons/node.png';
import expressIcon from '../assets/icons/express.png';
import mongoIcon from '../assets/icons/mongopng.png';
import reactIcon from '../assets/icons/react.jpeg';

const AnimatedTestimonialCard = ({ company, feedback, author }) => (
    <motion.div
    className="animated-testimonial-card"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h3>{company}</h3>
    <p>"{feedback}"</p>
    <p className="author">- {author}</p>
  </motion.div>
  );
  
  const TestimonialSection = () => (
    <>
    <div className="animated-testimonial-section">
      <h2>What Clients Say</h2>
      <div className="animated-testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <AnimatedTestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
    
    <div className="mern-container">
      <div className="mern-text">
        <h1>
         𝙲𝚛𝚊𝚏𝚝𝚒𝚗𝚐, 𝚜𝚞𝚜𝚝𝚊𝚒𝚗𝚒𝚗𝚐, 𝚊𝚗𝚍 𝚌𝚘𝚍𝚒𝚗𝚐 𝚏𝚘𝚛 𝚝𝚘𝚖𝚘𝚛𝚛𝚘𝚠'𝚜 𝚒𝚗𝚗𝚘𝚟𝚊𝚝𝚒𝚘𝚗𝚜</h1>
        <h2>
          <span className="mern">MERN</span> Stack in 2024
        </h2>
      </div>
      <div className="mern-icons">
        <div className="icon-box">
          <img src={expressIcon} alt="Express" />
          <p>Express</p>
        </div>
        <div className="icon-box">
          <img src={nodeIcon} alt="Node.js" />
          <p>Node.js</p>
        </div>
        <div className="icon-box">
          <img src={reactIcon} alt="React" />
          <p>React</p>
        </div>
        <div className="icon-box">
          <img src={mongoIcon} alt="MongoDB" />
          <p>MongoDB</p>
        </div>
      </div>
    </div>
    

    </>
  );

export default TestimonialSection;
