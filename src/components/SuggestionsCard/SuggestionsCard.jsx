import React from "react";
import userImg from "../../assets/userOne.jpg";
import { AiOutlineUserAdd } from "react-icons/ai";
import "./SuggestionsCard.css";

const SuggestionsCard = ({
  user: { avatarURL, firstName, lastName, username },
}) => {
  return (
    <div className="suggestions-card">
      <div className="user-avatar">
        <img src={avatarURL} alt="user" />
      </div>
      <div className="suggestions-info">
        <h4>{`${firstName} ${lastName}`}</h4>
        <p>@{username}</p>
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
