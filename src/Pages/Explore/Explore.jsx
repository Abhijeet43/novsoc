import React, { useEffect } from "react";
import { getPosts, getUsers } from "../../redux/asyncThunk/";
import { useSelector, useDispatch } from "react-redux";
import { Header, PostCard, SuggestionsCard, Sort } from "../../components/";
import "./Explore.css";

const Explore = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPosts());
  }, [dispatch]);

  const { user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.posts);
  const { users } = useSelector((state) => state.users);

  const otherUsers = users.filter((item) => item.username !== user.username);

  const nonFollowing = otherUsers.filter((item) =>
    item.following.every((following) => following.username !== user.username)
  );

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

export { Explore };
