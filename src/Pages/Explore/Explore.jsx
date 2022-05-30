import React from "react";
import { useSelector } from "react-redux";
import { Header, PostCard, Suggestions, Sort } from "../../components/";
import "./Explore.css";

const Explore = () => {
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

          <Suggestions />
        </section>
      </main>
    </>
  );
};

export { Explore };
