import React from 'react';
import '../styles/footer.css';

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>ProlificDev</h3>
              <p>Frontend Developer | 4 Years of Experience</p>
              <p>Building beautiful and functional web experiences.</p>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/works">Works</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} Emmanuel Awuzie. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
