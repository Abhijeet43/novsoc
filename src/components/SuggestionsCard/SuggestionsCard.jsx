import React from "react";
import userImg from "../../assets/userOne.jpg";
import { AiOutlineUserAdd } from "react-icons/ai";
import "./SuggestionsCard.css";

const SuggestionsCard = () => {
  return (
    <div className="suggestions-card">
      <div className="user-avatar">
        <img src={userImg} alt="user" />
      </div>
      <div className="suggestions-info">
        <h4>John Doe</h4>
        <p>@johnDoe</p>
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
