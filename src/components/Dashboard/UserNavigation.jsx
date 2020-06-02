import React from "react";

const UserNavigation = ({ isUserNavOpen, setIsUserNavOpen }) => {
  return (
    <div
      className={`usernavigation ${
        isUserNavOpen ? "usernavigation__slide-in" : ""
      }`}
    >
      <div
        className="usernavigation__close"
        onClick={() => setIsUserNavOpen(false)}
      >
        &times;
      </div>
    </div>
  );
};

export default UserNavigation;
