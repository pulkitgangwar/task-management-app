import React, { useMemo } from "react";
import swal from "@sweetalert/with-react";
import { useAuth } from "../../context/Auth.context";

const UserPopup = ({ isUserProfileOpen }) => {
  const { logout } = useAuth();
  const userData = useMemo(() => {
    return JSON.parse(
      atob(JSON.parse(localStorage.getItem("access")).split(".")[1])
    );
  }, []);

  const handleLogout = async () => {
    const userOption = await swal({
      title: "Logging Out",
      text: "Are you sure, you want to log out ?",
      icon: "warning",
      buttons: {
        cancel: {
          text: "Cancel",
          value: false,
          visible: true,
          className: "btn btn--danger",
          closeModal: true,
        },
        confirm: {
          text: "Yes",
          className: "btn btn--success",
          value: true,
          closeModal: true,
        },
      },
    });
    if (!userOption) return;
    logout();
  };

  return (
    <div className={`userpopup ${isUserProfileOpen ? "userpopup__on" : ""}`}>
      <div className="userpopup__details">
        <div className="userpopup__details__avatar"></div>
        <h3 className="userpopup__details__name">
          {userData.name || "Anonymous"}
        </h3>
        <h3 className="userpopup__details__email">{userData?.email}</h3>
      </div>
      <div>
        <button
          onClick={handleLogout}
          className="userpopup__btn btn btn--danger btn--danger--small"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserPopup;
