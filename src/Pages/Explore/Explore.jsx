import React from "react";
import { Header, PostCard, SuggestionsCard, Sort } from "../../components/";
import "./Explore.css";

const Explore = () => {
  return (
    <>
      <Header />
      <main className="main-section">
        <section className="main-container">
          <section className="card-container">
            <Sort />

            <PostCard />
            <PostCard />
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
