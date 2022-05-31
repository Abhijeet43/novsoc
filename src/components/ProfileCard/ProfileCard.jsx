import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/slices/";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";
import "./ProfileCard.css";

const ProfileCard = ({
  userData: {
    avatarURL,
    firstName,
    lastName,
    username,
    website,
    bio,
    followers,
    following,
  },
  posts,
  setShowEditModal,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
    navigate("/");
    toast.success("Logged Out Successfully!!");
  };

  return (
    <section className="profile">
      <div className="profile-image-container">
        {avatarURL ? (
          <img src={avatarURL} alt="profile" className="profile-image" />
        ) : (
          <p className="profile-avatar">{`${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`}</p>
        )}
      </div>
      <h2 className="profile-name">{`${firstName} ${lastName}`}</h2>
      <p className="profile-handle">@{username}</p>
      <p className="profile-description">{bio}</p>
      <div className="profile-actions">
        <button
          className="btn btn-primary profile-btn"
          onClick={() => setShowEditModal(true)}
        >
          Edit Profile
        </button>
        <button
          className="btn btn-danger profile-btn"
          title="Logout"
          onClick={logoutHandler}
        >
          <FiLogOut />
        </button>
      </div>
      <div className="profile-details">
        <div>
          <p className="bold center">{posts.length}</p>
          <p>Posts</p>
        </div>
        <div>
          <p className="bold center">{followers.length}</p>
          <p>Followers</p>
        </div>
        <div>
          <p className="bold center">{following.length}</p>
          <p>Following</p>
        </div>
      </div>
      <p className="profile-link">
        <Link to={website}>{website}</Link>
      </p>
    </section>
  );
};

export { ProfileCard };
