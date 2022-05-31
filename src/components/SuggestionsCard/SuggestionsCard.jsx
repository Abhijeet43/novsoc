import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";
import "./SuggestionsCard.css";

const SuggestionsCard = ({
  user: { avatarURL, firstName, lastName, username },
}) => {
  const navigate = useNavigate();
  return (
    <div className="suggestions-card">
      <div
        className="user-details"
        onClick={() => navigate(`/profile/${username}`)}
      >
        <div className="user-avatar">
          <img src={avatarURL} alt="user" />
        </div>
        <div className="suggestions-info">
          <h4>{`${firstName} ${lastName}`}</h4>
          <p>@{username}</p>
        </div>
      </div>
      <div className="suggestions-action">
        <button className="suggestions-follow" title="Follow">
          <AiOutlineUserAdd />
        </button>
      </div>
    </div>
  );
};

export { SuggestionsCard };
