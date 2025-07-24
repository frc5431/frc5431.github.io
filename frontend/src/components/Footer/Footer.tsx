import React from 'react'


import './Footer.css';

const Footer = () => {
  return (
    <footer className="page-footer sticky-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} FRC 5431 - Titan Robotics. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer