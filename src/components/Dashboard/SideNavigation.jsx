import React from "react";

const SideNavigation = ({ isNavOpen }) => {
  return (
    <div
      className={`sidenavigation ${
        isNavOpen ? "sidenavigation__slide-in" : ""
      }`}
    ></div>
  );
};

export default SideNavigation;
