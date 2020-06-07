import React from "react";
import { Link } from "react-router-dom";

/**
 *  Sidebar Component
 */
const SideBar = () => {
  return (
    <div className="sidebar">
      <Link className="sidebar__logo" to="/">
        <img src="/images/logo-white.svg" alt="Logo" width="100px" />
      </Link>
      <div className="sidebar__image">
        <img
          src="/images/illustration.svg"
          alt="illustration"
          className="sidebar__image__img"
        />
      </div>
      <h1 className="sidebar__placeholder__main">TASK</h1>
      <h2 className="sidebar__placeholder__sub">MANAGEMENT</h2>
    </div>
  );
};

export default SideBar;
