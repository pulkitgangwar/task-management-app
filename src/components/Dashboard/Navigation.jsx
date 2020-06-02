import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import {GrClose} from "react-icons/gr";

const Navigation = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <nav className="navigation">
      <div className="navigation__heading">
        <div
          className="navigation__hamburger-toggle"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <GiHamburgerMenu size="4rem" />
        </div>
        <h2 className="navigation__heading__logo">Logo</h2>
      </div>
      <div className="navigation__for-user">
        <h3 className="paragraph-primary  navigation__for-user__logout">
          Logout
        </h3>
        <div className="navigation__for-user__hamburger"></div>
      </div>
    </nav>
  );
};

export default Navigation;
