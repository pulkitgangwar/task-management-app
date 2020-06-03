import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import {GrClose} from "react-icons/gr";

// importing consumer
import { Auth } from "../../context/Auth.context";

const Navigation = ({ isNavOpen, setIsNavOpen }) => {
  const { logout } = useContext(Auth);
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
        <h3
          onClick={logout}
          className="paragraph-secondary  navigation__for-user__logout"
        >
          Logout
        </h3>
        <div className="navigation__for-user__hamburger"></div>
      </div>
    </nav>
  );
};

export default Navigation;
