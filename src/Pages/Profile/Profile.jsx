import React, { useState } from "react";
import {
  Header,
  PostCard,
  ProfileCard,
  EditProfileModal,
  Suggestions,
} from "../../components/";

import { useSelector } from "react-redux";

import "./Profile.css";

const Profile = () => {
  const [showEditModal, setShowEditModal] = useState(false);

  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  const userPosts = posts.filter((post) => post.username === user.username);

  return (
    <>
      <Header />
      <main className="main-section">
        <section className="main-container">
          <section>
            <ProfileCard
              user={user}
              posts={userPosts}
              setShowEditModal={setShowEditModal}
            />

            <div
              className={`edit-modal-overlay ${
                showEditModal ? "edit-modal-overlay-active" : ""
              }`}
              onClick={() => setShowEditModal(false)}
            ></div>

            <EditProfileModal
              showEditModal={showEditModal}
              setShowEditModal={setShowEditModal}
            />

            <section className="card-container">
              <h2 className="post-heading">Posts</h2>
              {userPosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </section>
          </section>

          <Suggestions />
        </section>
      </main>
    </>
  );
};

export { Profile };
