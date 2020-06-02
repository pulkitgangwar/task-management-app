import React from "react";

const SideNavigation = ({ isNavOpen }) => {
  return (
    <div
      className={`sidenavigation ${
        isNavOpen ? "" : "sidenavigation__navigation-off"
      }`}
    >
      <div className={`sidenavigation__content ${
        isNavOpen ? "" : "sidenavigation__content__navigation-off"
      }`}>asldjf alskdjf alksdfj</div>
    </div>
  );
};

export default SideNavigation;
