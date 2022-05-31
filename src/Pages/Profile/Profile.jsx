import React, { useState, useEffect } from "react";
import {
  Header,
  PostCard,
  ProfileCard,
  EditProfileModal,
  Suggestions,
} from "../../components/";

import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/asyncThunk/";

import "./Profile.css";

const Profile = () => {
  const [showEditModal, setShowEditModal] = useState(false);

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  const [userProfile, setUserProfile] = useState(user);

  const userPosts = posts.filter((post) => post.username === user.username);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="main-section">
        <section className="main-container">
          <section>
            <ProfileCard
              userData={user}
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
              setUserProfile={setUserProfile}
              userProfile={userProfile}
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
