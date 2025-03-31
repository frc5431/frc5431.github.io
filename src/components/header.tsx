import React, { useEffect } from 'react';

const Header: React.FC = () => {
  useEffect(() => {
    // Handle dropdown hover functionality
    const handleDropdownHover = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        const dropdowns = document.querySelectorAll('.dropdown');
        
        dropdowns.forEach(dropdown => {
          dropdown.addEventListener('mouseenter', function(this: HTMLElement) {
            this.classList.add('show');
            const dropdownToggle = this.querySelector('.dropdown-toggle');
            if (dropdownToggle) dropdownToggle.setAttribute('aria-expanded', 'true');
            const dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) dropdownMenu.classList.add('show');
          });
          
          dropdown.addEventListener('mouseleave', function(this: HTMLElement) {
            this.classList.remove('show');
            const dropdownToggle = this.querySelector('.dropdown-toggle');
            if (dropdownToggle) dropdownToggle.setAttribute('aria-expanded', 'false');
            const dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) dropdownMenu.classList.remove('show');
          });
        });
      }
    };

    // Update game manual link with current year
    const updateGameManualLink = () => {
      const currentYear = new Date().getFullYear();
      const linkElement = document.getElementById('gameManualLink');
      if (linkElement) {
        linkElement.setAttribute('href', `https://firstfrc.blob.core.windows.net/frc${currentYear}/Manual/${currentYear}GameManual.pdf`);
        linkElement.textContent = `${currentYear} FRC Game Manual`;
      }
    };

    // Run on component mount and on window resize
    handleDropdownHover();
    updateGameManualLink();
    
    window.addEventListener('resize', handleDropdownHover);
    
    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('resize', handleDropdownHover);
    };
  }, []);

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-custom">
      {/* Side Logo */}
      <a href="index.html" className="navbar-brand">
        <img src="img/universal/5431Logo.png" alt="5431" className="logo" draggable="false" />
      </a>

      <button
        className="navbar-toggler navbar-dark"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="index.html">Home</a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              About
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="ourteam.html">Our Team</a>
              <a className="dropdown-item" href="ourstory.html">Our Story</a>
              <a className="dropdown-item" href="ourvalues.html">Our Values</a>
              <a className="dropdown-item" href="oursponsors.html">Our Sponsors</a>
            </div>
          </li>
          {/* Commented out gallery link */}
          {/* <li className="nav-item">
            <a className="nav-link" href="gallery.html">Gallery</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="events.html">Events</a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="resourcesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Resources
            </a>
            <div className="dropdown-menu" aria-labelledby="resourcesDropdown">
              <a className="dropdown-item text-wrap" href="https://titanroboticsbc.wixsite.com/home/" target="_blank" rel="noopener noreferrer">
                Booster Club
              </a>
              <a className="dropdown-item text-wrap" href="https://www.firstinspires.org/resource-library/frc/competition-manual-qa-system" target="_blank" rel="noopener noreferrer">
                Season Materials
              </a>
              <a className="dropdown-item text-wrap" id="gameManualLink" href="#" target="_blank" rel="noopener noreferrer">
                FRC Game Manual
              </a>
              <a className="dropdown-item text-wrap" href="http://firstfrc.blob.core.windows.net/frc2024/Manual/Sections/2024GameManual-13EventRules.pdf" target="_blank" rel="noopener noreferrer">
                Event Rules
              </a>
              <a className="dropdown-item text-wrap" href="https://www.firstinspires.org/robotics/frc/playing-field" target="_blank" rel="noopener noreferrer">
                Playing Field Assets
              </a>
              <a className="dropdown-item text-wrap" href="https://docs.wpilib.org/en/stable/" target="_blank" rel="noopener noreferrer">
                WPILib Docs
              </a>
              <a className="dropdown-item text-wrap" href="https://www.firstinspires.org/robotics/frc/blog/" target="_blank" rel="noopener noreferrer">
                FRC Blog
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contactus.html">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;