import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const SideNavigation = ({ isNavOpen }) => {
  return (
    <div
      className={`sidenavigation ${
        isNavOpen ? "" : "sidenavigation__navigation-off"
      }`}
    >
      <div
        className={`sidenavigation__content ${
          isNavOpen ? "" : "sidenavigation__content__navigation-off"
        }`}
      >
      sjfsdfj 
      asdjf 

      asdfkj
        {/* <ul className="sidenavigation__ul">
          <li className="sidenavigation__li sidenavigation__drop ">
            <div className="sidenavigation__drop__title">
              <p className="paragraph-primary">Status Toggle</p>
              <IoIosArrowDown />
            </div>
            <ul className="sidenavigation__drop__ul">
              <li className="sidenavigation__drop__li">
                <p className="paragraph-secondary">Pending</p>
              </li>
              <li className="sidenavigation__drop__li">
                <p className="paragraph-secondary">In Progress</p>
              </li>
              <li className="sidenavigation__drop__li  sidenavigation__drop__li--active">
                <p className="paragraph-secondary">Done</p>
              </li>
            </ul>
          </li>

        
          <li className="sidenavigation__li sidenavigation__drop ">
            <div className="sidenavigation__drop__title">
              <p className="paragraph-primary">Labels</p>
              <IoIosArrowDown />
            </div>
            <ul className="sidenavigation__drop__ul sidenavigation__drop__ul--active">
              <li className="sidenavigation__drop__li">
                <p className="paragraph-secondary">Personal</p>
              </li>
              <li className="sidenavigation__drop__li">
                <p className="paragraph-secondary">Work</p>
              </li>
              <li className="sidenavigation__drop__li  sidenavigation__drop__li--active">
                <p className="paragraph-secondary">Shopping</p>
              </li>
              <li className="sidenavigation__drop__li  sidenavigation__drop__li--active">
                <p className="paragraph-secondary">Travel</p>
              </li>
              <li className="sidenavigation__drop__li  sidenavigation__drop__li--active">
                <p className="paragraph-secondary">Home</p>
              </li>
              <li className="sidenavigation__drop__li">
                <p className="paragraph-secondary">Office</p>
              </li>
              <li className="sidenavigation__drop__li">
                <p className="paragraph-secondary">Other</p>
              </li>
            </ul>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default SideNavigation;
