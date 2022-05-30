import React, { useEffect, useState } from "react";
import {
  Header,
  PostCard,
  SuggestionsCard,
  ProfileCard,
  EditProfileModal,
} from "../../components/";

import { getPosts, getUsers } from "../../redux/asyncThunk/";
import { useSelector, useDispatch } from "react-redux";

import "./Profile.css";

const Profile = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPosts());
  }, [dispatch]);

  const otherUsers = users.filter((item) => item.username !== user.username);

  const nonFollowing = otherUsers.filter((item) =>
    item.following.every((following) => following.username !== user.username)
  );

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

          <section className="suggestions-container">
            <h2 className="suggestions-title">People you may know</h2>
            <div className="suggestions-list">
              {nonFollowing.map((user) => (
                <SuggestionsCard key={user._id} user={user} />
              ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export { Profile };
