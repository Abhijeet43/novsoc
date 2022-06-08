import React from "react";
import { Link } from "react-router-dom";
import "./UserCard.css";

const UserCard = ({ user: { firstName, lastName, username, avatarURL } }) => {
  return (
    <div className="user-card">
      <div className="user-card-img">
        <Link to={`/profile/${username}`}>
          <img src={avatarURL} alt="user" />
        </Link>
      </div>
      <div className="user-card-info">
        <Link className="user-card-info-link" to={`/profile/${username}`}>
          <h3 className="user-details">
            {firstName} {lastName}
          </h3>
          <span className="user-handle">@{username}</span>
        </Link>
      </div>
    </div>
  );
};

export { UserCard };
