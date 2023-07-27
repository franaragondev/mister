import React from "react";
import userIcon from "../assets/userIcon.png";
import teamIcon from "../assets/teamIcon.png";
import logout from "../assets/logout.png";

const Header = () => {
  const redirect = (url) => {
    window.location.href = `/${url}`;
  };

  const handleIcon = () => {
    localStorage.removeItem("user");
    redirect("");
  };

  return (
    <div className="pageTitle">
      <img src={teamIcon} alt="team icon" />
      <div>
        <h1 onClick={() => redirect("")}>LA LIGA DEL SUR</h1>
        <p>La mejor liga del mundo</p>
      </div>
      <div>
        {window.location.href.split("/")[
          window.location.href.split("/").length - 1
        ] !== "login" && (
          <>
            <img
              onClick={() => redirect("login")}
              id="userIcon"
              src={userIcon}
              alt="user icon"
            />{" "}
          </>
        )}
        {localStorage.getItem("user") &&
          window.location.href.split("/")[
            window.location.href.split("/").length - 1
          ] === "login" && (
            <img
              onClick={() => handleIcon()}
              id="userIcon"
              src={logout}
              alt="user icon"
            />
          )}
      </div>
    </div>
  );
};

export default Header;
