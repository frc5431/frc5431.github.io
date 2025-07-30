import React from "react";
import { Link } from "react-router-dom";
import "./404.css";

const NotFound: React.FC = () => (
  <div className="notfound-container">
    <h1>404</h1>
    <h2 className="notfound-title">Page Not Found</h2>
    <p className="notfound-message">
      Oops! The page you're looking for doesn't exist or has been moved.
      <br />
      Please check the URL or return to the homepage.
    </p>
    <Link to="/" className="notfound-home-link">
      ⬅ Back to Home
    </Link>
  </div>
);

export default NotFound;
