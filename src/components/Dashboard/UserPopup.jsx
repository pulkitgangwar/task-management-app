import React, { useContext } from "react";

// importing auth context
import { Auth } from "../../context/Auth.context";

const UserPopup = ({ isUserProfileOpen, userData }) => {
  const { logout } = useContext(Auth);
  const { email, name } = userData;

  return (
    <div className={`userpopup ${isUserProfileOpen ? "userpopup__on" : ""}`}>
      <div className="userpopup__details">
        <div className="userpopup__details__avatar"></div>
        <h3 className="userpopup__details__name">
          {name ? name : "Anonymous"}
        </h3>
        <h3 className="userpopup__details__email">
          {email ? email : "Anonymous@Anonymous.Anonymous"}
        </h3>
      </div>
      <div>
        <button
          onClick={logout}
          className="userpopup__btn btn btn--danger btn--danger--small"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserPopup;
