import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
  <div className="container">
        <div className="social-icons">
          <a href="https://github.com/silvam22?tab=repositories" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/miriamsilva1/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <p className="footer-text">
          &copy; 2023 Miriam Silva. All rights reserved.
        </p>
      </div>
</footer>
  );
};

export default Footer;
