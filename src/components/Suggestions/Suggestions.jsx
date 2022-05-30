import React from "react";
import { useSelector } from "react-redux";
import { SuggestionsCard } from "../index";
import "./Suggestions.css";

const Suggestions = () => {
  const { users } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.auth);

  const otherUsers = users.filter((item) => item.username !== user.username);

  const nonFollowing = otherUsers.filter((item) =>
    item.following.every((following) => following.username !== user.username)
  );
  return (
    <section className="suggestions-container">
      <h2 className="suggestions-title">People you may know</h2>
      <div className="suggestions-list">
        {nonFollowing.map((user) => (
          <SuggestionsCard key={user._id} user={user} />
        ))}
      </div>
    </section>
  );
};

export { Suggestions };
