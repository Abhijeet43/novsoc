import React, { useEffect } from "react";
import {
  Header,
  PostCard,
  SuggestionsCard,
  CreatePostModal,
  Sort,
} from "../../components/";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, getPosts } from "../../redux/asyncThunk/";
import "./Home.css";
import { VscNoNewline } from "react-icons/vsc";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

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
            </div>
          </section>
        </section>
        <CreatePostModal />
      </main>
    </>
  );
};

export { Home };
