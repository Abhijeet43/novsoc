import React, { useEffect } from "react";
import { getPosts } from "../../redux/asyncThunk/";
import { useSelector, useDispatch } from "react-redux";
import { Header, PostCard, SuggestionsCard, Sort } from "../../components/";
import "./Explore.css";

const Explore = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { posts } = useSelector((state) => state.posts);

  return (
    <>
      <Header />
      <main className="main-section">
        <section className="main-container">
          <section className="card-container">
            <Sort />
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
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

export { Explore };
