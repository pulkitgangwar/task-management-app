import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Navigation = ({ toggleUserProfile }) => {
  return (
    <nav className="navigation">
      <div className="navigation__heading">
        <h2 className="navigation__heading__logo">Logo</h2>
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
