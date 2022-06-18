import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiOutlineUserAdd } from "react-icons/ai";
import { followUser } from "../../redux/asyncThunk";
import { updateUser } from "../../redux/slices/";
import "./SuggestionsCard.css";

const SuggestionsCard = ({
  user: { avatarURL, firstName, lastName, username, _id: id },
  token,
}) => {
  const [disableFollowBtn, SetDisableFollowBtn] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const followUserHandler = async (userId, token) => {
    SetDisableFollowBtn(userId);
    const response = await dispatch(followUser({ userId, token }));
    if (response.payload.status === 200) {
      SetDisableFollowBtn(null);
      dispatch(updateUser(response.payload.data?.user));
    } else {
      toast.error(response.payload.data.errors[0]);
    }
  };

  return (
    <div className="suggestions-card">
      <div
        className="user-details"
        onClick={() => navigate(`/profile/${username}`)}
      >
        {avatarURL ? (
          <div className="user-avatar">
            <img src={avatarURL} alt="user" />
          </div>
        ) : (
          <div className="user-initials">{`${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`}</div>
        )}

        <div className="suggestions-info">
          <h4>{`${firstName} ${lastName}`}</h4>
          <p>@{username}</p>
        </div>
      </div>
      <div className="suggestions-action">
        <button
          disabled={disableFollowBtn === id ? true : false}
          className="suggestions-follow"
          title="Follow"
          onClick={() => followUserHandler(id, token)}
        >
          <AiOutlineUserAdd />
        </button>
      </div>
    </div>
  );
};

export { SuggestionsCard };
