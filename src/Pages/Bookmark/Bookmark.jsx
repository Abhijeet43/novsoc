import React from "react";
import { Header, PostCard, SuggestionsCard } from "../../components/";
import "./Bookmark.css";

const Bookmark = () => {
  return (
    <>
      <Header />
      <main className="main-section">
        <section className="main-container">
          <section className="card-container">
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

export { Bookmark };
