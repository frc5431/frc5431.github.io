import React from "react";

import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="page-footer sticky-footer" role="contentinfo">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} FRC 5431 - Titan Robotics. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
