import React, { useState } from "react";
import { AiFillCamera, AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import "./EditProfileModal.css";

const EditProfileModal = ({ setShowEditModal, showEditModal }) => {
  const { user } = useSelector((state) => state.auth);

  const [userData, setUserData] = useState({
    avatarURL: user.avatarURL,
    website: user.website,
    bio: user.bio,
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <section
      className={`edit-profile-modal ${
        showEditModal ? "edit-profile-modal-active" : ""
      }`}
    >
      <div className="edit-profile-header">
        <h2>Edit Profile</h2>
        <button
          className="edit-profile-close"
          onClick={() => setShowEditModal(false)}
        >
          <AiOutlineClose />
        </button>
      </div>

      <div className="edit-avatar">
        <span className="edit-profile-text">Avatar</span>
        <div className="avatar">
          <div className="edit-profile-img-container">
            <img src={userData.avatarURL} alt="user" />
          </div>
          <label htmlFor="change-profile">
            <input type="file" id="change-profile" hidden name="avatar" />
            <AiFillCamera />
          </label>
        </div>
      </div>

      <div className="bio">
        <span className="edit-profile-text">Bio</span>
        <textarea
          name="bio"
          placeholder="I like to do"
          value={userData.bio}
          onChange={changeHandler}
        ></textarea>
      </div>

      <div className="website">
        <span className="edit-profile-text">Website</span>
        <input
          type="url"
          name="website"
          placeholder="https://www.example.com"
          value={userData.website}
          onChange={changeHandler}
        />
      </div>

      <div className="edit-profile-footer">
        <button className="btn btn-primary profile-btn">Update</button>
      </div>
    </section>
  );
};

export { EditProfileModal };
