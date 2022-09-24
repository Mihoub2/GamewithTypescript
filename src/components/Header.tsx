import React from "react";
import { Link } from "react-router-dom";

import "../styles/header.css";
const Header = () => {
  return (
    <div className="headerContainer">
      <Link className="button" to="/memory">
        <button className="headerButton">Memory Game</button>
      </Link>
      <Link className="button" to="/memoryExpert">
        <button className="headerButton">Memory Game Pour Les Experts!</button>
      </Link>
      <Link className="button" to="/">
        <button className="headerButton">Home</button>
      </Link>
      <Link className="button" to="/aboutMe">
        <button className="headerButton">About Me</button>
      </Link>
    </div>
  );
};

export default Header;
