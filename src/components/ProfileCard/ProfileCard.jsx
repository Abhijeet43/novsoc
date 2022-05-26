import React from "react";
import userImg from "../../assets/userOne.jpg";
import { FiLogOut } from "react-icons/fi";
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <section className="profile">
      <div className="profile-image-container">
        <img src={userImg} alt="profile" className="profile-image" />
      </div>
      <h2 className="profile-name">John Doe</h2>
      <p className="profile-handle">@johnDoe</p>
      <p className="profile-description">A web dev enthusiast.</p>
      <div className="profile-actions">
        <button className="btn btn-primary">Edit Profile</button>
        <button className="btn btn-danger" title="Logout">
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
        <a href="#">https://www.google.co.in</a>
      </p>
    </section>
  );
};

export { ProfileCard };
