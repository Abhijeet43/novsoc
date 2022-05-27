import React from "react";
import userImg from "../../assets/userOne.jpg";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/slices/";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";
import "./ProfileCard.css";

const ProfileCard = () => {
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
        <img src={userImg} alt="profile" className="profile-image" />
      </div>
      <h2 className="profile-name">John Doe</h2>
      <p className="profile-handle">@johnDoe</p>
      <p className="profile-description">A web dev enthusiast.</p>
      <div className="profile-actions">
        <button className="btn btn-primary profile-btn">Edit Profile</button>
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
          <p className="bold center">1</p>
          <p>Posts</p>
        </div>
        <div>
          <p className="bold center">1</p>
          <p>Followers</p>
        </div>
        <div>
          <p className="bold center">1</p>
          <p>Following</p>
        </div>
      </div>
      <p className="profile-link">
        <Link to="https://www.google.co.in">https://www.google.co.in</Link>
      </p>
    </section>
  );
};

export { ProfileCard };
