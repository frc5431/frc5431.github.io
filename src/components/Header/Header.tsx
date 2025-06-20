import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/img/universal/5431Logo.png';
import './Header.css';

export interface HeaderProps {
  headerData: string;
  setHeaderData: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ headerData, setHeaderData }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const aboutDropdownRef = useRef<HTMLLIElement>(null);
  const resourcesDropdownRef = useRef<HTMLLIElement>(null);

  // Toggle navbar collapse for mobile
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  // Toggle dropdown menus
  const toggleAboutDropdown = () => setAboutDropdownOpen(!aboutDropdownOpen);
  const toggleResourcesDropdown = () => setResourcesDropdownOpen(!resourcesDropdownOpen);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false);
      }
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target as Node)) {
        setResourcesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-custom" style={{borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
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
        style={{marginRight:'3vw'}}
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
          <li className="nav-item dropdown" ref={aboutDropdownRef}>
            <div
              className={`nav-link dropdown-toggle ${aboutDropdownOpen ? 'active show' : ''}`}
              role="button"
              onClick={toggleAboutDropdown}
              aria-haspopup="true"
              aria-expanded={aboutDropdownOpen}
              style={{cursor: 'pointer'}}
            >
              About
            </div>
            <div className={`dropdown-menu ${aboutDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
              <div className="dropdown-item" onClick={() => {setHeaderData("ourteam"); setAboutDropdownOpen(false);}} style={{cursor: 'pointer'}}>Our Team</div>
              <div className="dropdown-item" onClick={() => {setHeaderData("ourstory"); setAboutDropdownOpen(false);}} style={{cursor: 'pointer'}}>Our Story</div>
              <div className="dropdown-item" onClick={() => {setHeaderData("ourvalues"); setAboutDropdownOpen(false);}} style={{cursor: 'pointer'}}>Our Values</div>
              <div className="dropdown-item" onClick={() => {setHeaderData("oursponsors"); setAboutDropdownOpen(false);}} style={{cursor: 'pointer'}}>Our Sponsors</div>
            </div>
          </li>
          
          {/* Events link */}
          <li className="nav-item">
            <div 
              className={`nav-link ${headerData === "event" ? "active" : ""}`} 
              onClick={() => setHeaderData("event")} 
              style={{cursor: 'pointer'}}
              role="button"
            >
              Events
            </div>
          </li>
          
          {/* Resources dropdown */}
          <li className="nav-item dropdown" ref={resourcesDropdownRef}>
            <div
              className={`nav-link dropdown-toggle ${resourcesDropdownOpen ? 'active show' : ''}`}
              role="button"
              onClick={toggleResourcesDropdown}
              aria-haspopup="true"
              aria-expanded={resourcesDropdownOpen}
              style={{cursor: 'pointer'}}
            >
              Resources
            </div>
            <div className={`dropdown-menu ${resourcesDropdownOpen ? 'show' : ''}`} aria-labelledby="resourcesDropdown">
              <a className="dropdown-item" href="https://titanroboticsbc.wixsite.com/home/" target="_blank" rel="noopener noreferrer" onClick={() => setResourcesDropdownOpen(false)}>
                Booster Club
              </a>
              <a className="dropdown-item" href="https://www.firstinspires.org/resource-library/frc/competition-manual-qa-system" target="_blank" rel="noopener noreferrer" onClick={() => setResourcesDropdownOpen(false)}>
                Season Materials
              </a>
              <a className="dropdown-item" href="https://docs.wpilib.org/en/stable/" target="_blank" rel="noopener noreferrer" onClick={() => setResourcesDropdownOpen(false)}>
                WPILib Docs
              </a>
              <a className="dropdown-item" role="button" rel="noopener noreferrer" onClick={() => setResourcesDropdownOpen(false)}>
                Website Credit
              </a>
            </div>
          </li>
          
          {/* Contact link */}
          <li className="nav-item">
            <div 
              className={`nav-link ${headerData === "contact" ? "active" : ""}`} 
              onClick={() => setHeaderData("contact")} 
              style={{cursor: 'pointer'}}
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
              style={{cursor: 'pointer'}}
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