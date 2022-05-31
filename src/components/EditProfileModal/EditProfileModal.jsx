import React, { useState } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "../../redux/asyncThunk";
import { updateUser } from "../../redux/slices/";
import { saveImageToCloudindary } from "../../services/";
import { AiFillCamera, AiOutlineClose } from "react-icons/ai";
import "./EditProfileModal.css";

const EditProfileModal = ({ setShowEditModal, showEditModal, userProfile }) => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const reader = new FileReader();

  const [userData, setUserData] = useState({
    ...userProfile,
    avatarURL: "",
    avatarFile: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const addProfileImageHandler = (e) => {
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserData({
          ...userData,
          avatarURL: reader.result,
          avatarFile: e.target.files[0],
        });
      } else {
        reader.abort();
        setUserData({
          ...userData,
          avatarURL: "",
          avatarFile: "",
        });
      }
    };
  };

  const saveEditedData = async (data) => {
    try {
      const response = await dispatch(editUser({ userData: data, token }));
      if (response.payload.status === 201) {
        setUserData(response.payload.data.user);
        dispatch(updateUser(response?.payload.data.user));
        toast.info("Profile Updated Successfully!!");
      } else {
        toast.error(`${response?.payload?.data?.errors[0]}`);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setShowEditModal(false);
    }
  };

  const editUserHandler = async () => {
    try {
      if (userData.avatarURL !== "") {
        await saveImageToCloudindary(
          userData.avatarFile,
          saveEditedData,
          userData,
          "image"
        );
      } else if (
        userData.website !== userProfile.website ||
        userData.bio !== userProfile.bio
      ) {
        saveEditedData(userData);
      }
    } catch (error) {
      toast.error(error);
    }
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
            <img
              src={userData?.avatarURL || userProfile?.avatarURL}
              alt="user"
            />
          </div>
          <label htmlFor="change-profile">
            <input
              type="file"
              id="change-profile"
              hidden
              name="avatar"
              onChange={addProfileImageHandler}
            />
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
        <button
          className="btn btn-primary profile-btn"
          onClick={editUserHandler}
        >
          Update
        </button>
      </div>
    </section>
  );
};

export { EditProfileModal };
