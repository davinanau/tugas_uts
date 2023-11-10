import React from 'react';
import linkedinIcon from '../assets/images/photo/linkedin.jpg';
import instagramIcon from '../assets/images/photo/instagram1.jpg';
import gmailIcon from '../assets/images/photo/gmail.jpg';

import '../style/Footer.css';


function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/davina-nazwa-0465a6298">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/davinanazwa_/">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="mailto:davinanau@upi.edu">
            <img src={gmailIcon} alt="Gmail" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Davina Nazwa. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
