import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = ({ isDarkMode }) => {
  return (
    <div className={`home ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Hi, I'm Emmanuel Awuzie</h1>
            <p className="hero-subtitle">Frontend Developer | 4 Years of Experience</p>
            <p className="hero-description">
              I craft beautiful, responsive, and user-friendly web experiences using modern technologies.
              Passionate about clean code, performance, and creating solutions that matter.
            </p>
            <div className="hero-buttons">
              <Link to="/works" className="btn btn-primary">
                View My Works
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate frontend developer with 4 years of experience building web applications.
                I specialize in React, JavaScript, and modern web technologies.
              </p>
              <p>
                My journey in tech started with a curiosity about how websites work, and it has evolved into
                a career dedicated to creating exceptional user experiences. I love solving problems, learning
                new technologies, and collaborating with talented teams.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends, contributing to open-source
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>4+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>20+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools & Libraries</h3>
              <ul>
                <li>React Router</li>
                <li>Git & GitHub</li>
                <li>Webpack</li>
                <li>NPM/Yarn</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Design</h3>
              <ul>
                <li>UI/UX Principles</li>
                <li>Figma</li>
                <li>CSS Animations</li>
                <li>Accessibility</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Other</h3>
              <ul>
                <li>REST APIs</li>
                <li>Performance Optimization</li>
                <li>SEO Basics</li>
                <li>Problem Solving</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Work Together?</h2>
          <p>Let's create something amazing. Get in touch with me today.</p>
          <Link to="/contact" className="btn btn-primary">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
