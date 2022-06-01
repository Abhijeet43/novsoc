import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/asyncThunk";
import { SuggestionsCard } from "../index";
import "./Suggestions.css";

const Suggestions = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const otherUsers = users.filter((item) => item.username !== user?.username);

  const nonFollowing = otherUsers.filter((item) =>
    item.following.every((following) => following.username !== user?.username)
  );
  return (
    <section className="suggestions-container">
      <h2 className="suggestions-title">People you may know</h2>
      <div className="suggestions-list">
        {nonFollowing.map((user) => (
          <SuggestionsCard key={user._id} user={user} token={token} />
        ))}
      </div>
    </section>
  );
};

export { Suggestions };
