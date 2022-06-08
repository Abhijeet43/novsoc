import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Header,
  PostCard,
  Suggestions,
  CreatePostModal,
  Search,
} from "../../components/";
import { getPosts } from "../../redux/asyncThunk/";
import "./Explore.css";

const Explore = () => {
  const [showPostModal, setShowPostModal] = useState(false);
  const { posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Header setShowPostModal={setShowPostModal} />
      <main className="main-section">
        <section className="main-container">
          <section className="card-container">
            <Search />
            {[...posts]?.reverse().map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </section>

          <Suggestions />
          {showPostModal ? (
            <CreatePostModal
              showPostModal={showPostModal}
              setShowPostModal={setShowPostModal}
            />
          ) : null}
        </section>
      </main>
    </>
  );
};

export { Explore };
