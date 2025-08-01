import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-page footer-sticky" role="contentinfo">
      <div className="footer-content">
        <div className="footer-text">
          <p>
            &copy; {new Date().getFullYear()} FRC 5431 - Titan Robotics. All
            rights reserved.
          </p>
        </div>
        <div className="footer-social-container">
          <a
            href="https://www.instagram.com/frc5431/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon fontSize="large" className="footer-social-icon" />
          </a>
          <a
            href="https://www.facebook.com/frc5431/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon fontSize="large" className="footer-social-icon" />
          </a>
          <a
            href="https://www.youtube.com/@frc5431/"
            target="_blank"
            rel="noreferrer"
          >
            <YouTubeIcon fontSize="large" className="footer-social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
