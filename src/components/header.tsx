import React, { useState } from 'react';
// Make sure this path is correct for your project structure
import logo from '../assets/img/universal/5431Logo.png';

export interface HeaderProps {
  headerData: string;
  setHeaderData: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ headerData, setHeaderData }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // Toggle navbar collapse for mobile
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-custom">
      {/* Logo */}
      <div className="navbar-brand" onClick={() => setHeaderData("home")} style={{cursor: 'pointer'}}>
        <img src={logo} alt="5431" draggable="false" style={{width:'80px', marginLeft:'1vw'}}/>
      </div>

      {/* Mobile toggle button */}
      <button
        className="navbar-toggler navbar-dark"
        type="button"
        onClick={handleNavCollapse}
        aria-expanded={!isNavCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar links */}
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <div 
              className={`nav-link ${headerData === "home" ? "active" : ""}`} 
              onClick={() => setHeaderData("home")} 
              style={{cursor: 'pointer'}}
            >
              Home
            </div>
          </li>
          
          {/* About dropdown */}
          <li className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{cursor: 'pointer'}}
            >
              About
            </div>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <div className="dropdown-item" onClick={() => setHeaderData("ourteam")} style={{cursor: 'pointer'}}>Our Team</div>
              <div className="dropdown-item" onClick={() => setHeaderData("ourstory")} style={{cursor: 'pointer'}}>Our Story</div>
              <div className="dropdown-item" onClick={() => setHeaderData("ourvalues")} style={{cursor: 'pointer'}}>Our Values</div>
              <div className="dropdown-item" onClick={() => setHeaderData("oursponsors")} style={{cursor: 'pointer'}}>Our Sponsors</div>
            </div>
          </li>
          
          {/* Events link */}
          <li className="nav-item">
            <div 
              className={`nav-link ${headerData === "event" ? "active" : ""}`} 
              onClick={() => setHeaderData("event")} 
              role="button"
            >
              Events
            </div>
          </li>
          
          {/* Resources dropdown */}
          <li className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{cursor: 'pointer'}}
            >
              Resources
            </div>
            <div className="dropdown-menu" aria-labelledby="resourcesDropdown">
              <a className="dropdown-item" href="https://titanroboticsbc.wixsite.com/home/" target="_blank" rel="noopener noreferrer">
                Booster Club
              </a>
              <a className="dropdown-item" href="https://www.firstinspires.org/resource-library/frc/competition-manual-qa-system" target="_blank" rel="noopener noreferrer">
                Season Materials
              </a>
              <a className="dropdown-item" href="https://docs.wpilib.org/en/stable/" target="_blank" rel="noopener noreferrer">
                WPILib Docs
              </a>
            </div>
          </li>
          
          {/* Contact link */}
          <li className="nav-item">
            <div 
              className={`nav-link ${headerData === "contact" ? "active" : ""}`} 
              onClick={() => setHeaderData("contact")} 
              role="button"
            >
              Contact
            </div>
          </li>

          {/* Memories */}
          <li className="nav-item">
            <div 
              className={`nav-link ${headerData === "memories" ? "active" : ""}`} 
              onClick={() => setHeaderData("memories")} 
              role="button"
            >
              Memories
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;