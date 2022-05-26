import React from "react";
import {
  Header,
  PostCard,
  SuggestionsCard,
  ProfileCard,
  EditProfileModal,
} from "../../components/";

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

            <EditProfileModal />

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
      </main>
    </>
  );
};

export { Profile };
