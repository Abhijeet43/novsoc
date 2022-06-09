import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserCard.css";

const UserCard = ({
  user: { firstName, lastName, username, avatarURL },
  setShowUsersModal = "",
}) => {
  const navigate = useNavigate();
  const redirectToUser = () => {
    if (setShowUsersModal !== "") {
      setShowUsersModal(false);
    }
    navigate(`/profile/${username}`);
  };

  return (
    <div className="user-card">
      <div className="user-card-img">
        <button className="user-card-info-link" onClick={redirectToUser}>
          <img className="user-profile" src={avatarURL} alt="user" />
        </button>
      </div>
      <div className="user-card-info">
        <button className="user-card-info-link" onClick={redirectToUser}>
          <h3 className="user-details">
            <span>{firstName}</span> <span>{lastName}</span>
          </h3>
          <span className="user-handle">@{username}</span>
        </button>
      </div>
    </div>
  );
};

export { UserCard };
