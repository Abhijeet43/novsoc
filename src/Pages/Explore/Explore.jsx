import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Header,
  PostCard,
  Suggestions,
  Sort,
  CreatePostModal,
} from "../../components/";
import "./Explore.css";

const Explore = () => {
  const [showPostModal, setShowPostModal] = useState(false);
  const { posts } = useSelector((state) => state.posts);

  return (
    <>
      <Header setShowPostModal={setShowPostModal} />
      <main className="main-section">
        <section className="main-container">
          <section className="card-container">
            <Sort />
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </section>

          <Suggestions />
          <CreatePostModal
            showPostModal={showPostModal}
            setShowPostModal={setShowPostModal}
          />
        </section>
      </main>
    </>
  );
};

export { Explore };
