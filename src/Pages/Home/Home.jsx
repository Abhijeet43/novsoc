import React from "react";
import {
  Header,
  PostCard,
  SuggestionsCard,
  CreatePostModal,
  Sort,
} from "../../components/";
import "./Home.css";

const Home = () => {
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
        <CreatePostModal />
      </main>
    </>
  );
};

export { Home };
