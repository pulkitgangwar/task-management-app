import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

/**
 *  Header Main Menu
 */
const Navigation = ({ toggleUserProfile }) => {
  return (
    <nav className="navigation">
      <div className="navigation__heading">
        <Link className="navigation__heading__logo" to="/">
          <h2>TASK APP</h2>
        </Link>
      </div>
      <div className="navigation__for-user">
        <FaUserCircle
          className="navigation__for-user__hamburger"
          onClick={toggleUserProfile}
        />
      </div>
    </nav>
  );
};

export default Navigation;
