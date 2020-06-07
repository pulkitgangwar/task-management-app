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
          <img src="/images/logo-white.svg" alt="Logo" width="50px" />
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
