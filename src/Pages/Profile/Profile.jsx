import React from "react";
import {
  Header,
  PostCard,
  SuggestionsCard,
  CreatePostCard,
  ProfileCard,
} from "../../components/";

import userImg from "../../assets/userOne.jpg";

import { AiFillCamera, AiOutlineClose } from "react-icons/ai";

import "./Profile.css";

const Profile = () => {
  return (
    <>
      <Header />
      <main className="main-section">
        <section className="main-container">
          <section>
            <ProfileCard />

            <div className="edit-modal-overlay"></div>
            <section className="edit-profile-modal">
              <div className="edit-profile-header">
                <h2>Edit Profile</h2>
                <button className="edit-profile-close">
                  <AiOutlineClose />
                </button>
              </div>

              <div className="edit-avatar">
                <span className="edit-profile-text">Avatar</span>
                <div className="avatar">
                  <div className="edit-profile-img-container">
                    <img src={userImg} alt="user" />
                  </div>
                  <label htmlFor="change-profile">
                    <input type="file" id="change-profile" hidden />
                    <AiFillCamera />
                  </label>
                </div>
              </div>

              <div className="bio">
                <span className="edit-profile-text">Bio</span>
                <textarea name="bio" placeholder="I like to do"></textarea>
              </div>

              <div className="website">
                <span className="edit-profile-text">Website</span>
                <input type="text" placeholder="https://www.example.com" />
              </div>

              <div className="edit-profile-footer">
                <button className="btn btn-primary">Update</button>
              </div>
            </section>

            <section className="card-container">
              <h2 className="post-heading">Posts</h2>
              <PostCard />
              <PostCard />
            </section>
          </section>

          <section className="suggestions-container">
            <h2 className="suggestions-title">People you may know</h2>
            <div className="suggestions-list">
              <SuggestionsCard />

              <SuggestionsCard />

              <SuggestionsCard />
            </div>
          </section>
        </section>
        <CreatePostCard />
      </main>
    </>
  );
};

export { Profile };
