import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/slices/";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";
import "./ProfileCard.css";

const ProfileCard = ({ userData, posts, setShowEditModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logoutUser());
    navigate("/");
    toast.success("Logged Out Successfully!!");
  };

  return (
    <section className="profile">
      <div className="profile-image-container">
        {userData?.avatarURL !== "" ? (
          <img
            src={userData?.avatarURL}
            alt="profile"
            className="profile-image"
          />
        ) : (
          <p className="profile-avatar">{`${userData?.firstName[0].toUpperCase()}${userData?.lastName[0].toUpperCase()}`}</p>
        )}
      </div>
      <h2 className="profile-name">{`${userData?.firstName} ${userData?.lastName}`}</h2>
      <p className="profile-handle">@{userData?.username}</p>
      <p className="profile-description">{userData?.bio}</p>

      <div className="profile-actions">
        {user?.username !== userData?.username ? (
          <button className="btn btn-primary profile-btn">Follow</button>
        ) : (
          <>
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
          </>
        )}
      </div>
      <div className="profile-details">
        <div>
          <p className="bold center">{posts.length}</p>
          <p>Posts</p>
        </div>
        <div>
          <p className="bold center">{userData?.followers?.length}</p>
          <p>Followers</p>
        </div>
        <div>
          <p className="bold center">{userData?.following?.length}</p>
          <p>Following</p>
        </div>
      </div>
      <p className="profile-link">
        <button
          className="website-link"
          onClick={() => window.open(userData?.website, "_blank")}
          title={userData?.website}
        >
          {userData?.website}
        </button>
      </p>
    </section>
  );
};

export { ProfileCard };
