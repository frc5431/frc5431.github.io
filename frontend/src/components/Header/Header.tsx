import { useState, useRef, useEffect } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

import imageAliases from "../../assets/imageAliases";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const aboutDropdownRef = useRef<HTMLLIElement>(null);
  const resourcesDropdownRef = useRef<HTMLLIElement>(null);

  // Toggle navbar collapse for mobile
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  // Toggle dropdown menus
  const toggleAboutDropdown = () => setAboutDropdownOpen(!aboutDropdownOpen);
  const toggleResourcesDropdown = () =>
    setResourcesDropdownOpen(!resourcesDropdownOpen);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target as Node)
      ) {
        setAboutDropdownOpen(false);
      }
      if (
        resourcesDropdownRef.current &&
        !resourcesDropdownRef.current.contains(event.target as Node)
      ) {
        setResourcesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentYear = new Date().getFullYear();
  const currentGameManual =
    "https://firstfrc.blob.core.windows.net/frc" +
    currentYear +
    "/Manual/" +
    currentYear +
    "GameManual.pdf";
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg navbar-custom"
      style={{
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >
      {/* Logo */}
      <Link className="navbar-brand" to={"/"} style={{ cursor: "pointer" }}>
        <img
          src={imageAliases.logo}
          alt="5431"
          draggable="false"
          style={{ width: "80px", marginLeft: "1vw" }}
        />
      </Link>

      {/* Mobile toggle button */}
      <button
        className="navbar-toggler navbar-dark"
        type="button"
        onClick={handleNavCollapse}
        aria-expanded={!isNavCollapsed}
        aria-label="Toggle navigation"
        style={{ marginRight: "3vw" }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar links */}
      <div
        className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto">
          {/* <li className="nav-item">
            <NavLink 
              className={({ isActive }) => "nav-link" + (isActive ? " active" : " default")}  
              style={{cursor: 'pointer'}}
              to={"/"}
              role='button'
            >
              Home
            </NavLink>
          </li> */}

          {/* About dropdown */}
          <li className="nav-item dropdown" ref={aboutDropdownRef}>
            <button
              className={`nav-link dropdown-toggle ${aboutDropdownOpen ? "active show" : ""}`}
              onClick={toggleAboutDropdown}
              aria-haspopup="true"
              aria-expanded={aboutDropdownOpen}
              style={{ cursor: "pointer" }}
            >
              About
            </button>
            <div
              className={`dropdown-menu ${aboutDropdownOpen ? "show" : ""}`}
              aria-labelledby="navbarDropdown"
            >
              <NavLink
                className="dropdown-item"
                to="/about/ourteam"
                onClick={() => setAboutDropdownOpen(false)}
                style={{ cursor: "pointer" }}
              >
                Our Team
              </NavLink>
              <NavLink
                className="dropdown-item"
                to="/about/oursponsors"
                onClick={() => setAboutDropdownOpen(false)}
                style={{ cursor: "pointer" }}
              >
                Our Sponsors
              </NavLink>
            </div>
          </li>

          {/* Memories */}
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : " default")
              }
              style={{ cursor: "pointer" }}
              to={"/memories"}
            >
              Memories
            </NavLink>
          </li>

          {/* Events link */}
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : " default")
              }
              style={{ cursor: "pointer" }}
              to={"/events"}
              role="button"
            >
              Events
            </NavLink>
          </li>

          {/* Contact link */}
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : " default")
              }
              style={{ cursor: "pointer" }}
              to={"/contact"}
              role="button"
            >
              Contact
            </NavLink>
          </li>

          {/* Resources dropdown */}
          <li className="nav-item dropdown" ref={resourcesDropdownRef}>
            <button
              className={`nav-link dropdown-toggle ${resourcesDropdownOpen ? "active show" : ""}`}
              onClick={toggleResourcesDropdown}
              aria-haspopup="true"
              aria-expanded={resourcesDropdownOpen}
              style={{ cursor: "pointer", background: "none", border: "none" }}
            >
              Resources
            </button>

            <div
              className={`dropdown-menu ${resourcesDropdownOpen ? "show" : ""}`}
              aria-labelledby="resourcesDropdown"
            >
              <a
                className="dropdown-item"
                href="https://titanroboticsbc.wixsite.com/home/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setResourcesDropdownOpen(false)}
              >
                Booster Club
              </a>
              <a
                className="dropdown-item"
                href={currentGameManual}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setResourcesDropdownOpen(false)}
              >
                FRC Game Manual
              </a>
              <a
                className="dropdown-item"
                href="https://www.firstinspires.org/resource-library/frc/competition-manual-qa-system"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setResourcesDropdownOpen(false)}
              >
                Playing Field
              </a>
              <a
                className="dropdown-item"
                href="https://www.firstinspires.org/robotics/frc/playing-field"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setResourcesDropdownOpen(false)}
              >
                Season Materials
              </a>
              <a
                className="dropdown-item"
                href="https://docs.wpilib.org/en/stable/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setResourcesDropdownOpen(false)}
              >
                WPILib Docs
              </a>
              <button
                className="dropdown-item"
                onClick={() => setResourcesDropdownOpen(false)}
                style={{ cursor: "pointer" }}
              >
                Website Credit
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
