import React, { useEffect } from "react";
import {
  Header,
  PostCard,
  Suggestions,
  CreatePostModal,
  Sort,
} from "../../components/";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/asyncThunk/";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  let feedUsers = user.followers.map((user) => user.username);
  feedUsers = [...feedUsers, user.username];

  const feedPosts = posts.filter((post) => feedUsers.includes(post.username));

  return (
    <>
      <Header />
      <main className="main-section">
        <section className="main-container">
          <section className="card-container">
            <Sort />
            {feedPosts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </section>

          <Suggestions />
        </section>
        <CreatePostModal />
      </main>
    </>
  );
};

export { Home };
