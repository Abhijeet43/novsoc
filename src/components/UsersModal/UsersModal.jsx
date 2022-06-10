import React from "react";
import { UserCard } from "../index";
import { FaTimes } from "react-icons/fa";

const UsersModal = ({ users, userAction, setShowUsersModal }) => {
  return (
    <>
      <div
        className="create-post-overlay create-post-overlay-active"
        onClick={() => setShowUsersModal(false)}
      ></div>

      <div className="create-post-modal create-post-modal-active">
        <div className="create-post-header">
          <h2>{userAction}</h2>
          <button onClick={() => setShowUsersModal(false)}>
            <FaTimes />
          </button>
        </div>
        <div>
          {users.length > 0 ? (
            users.map((user) => (
              <UserCard
                key={user._id}
                user={user}
                setShowUsersModal={setShowUsersModal}
              />
            ))
          ) : (
            <p className="not-found-text">No result found</p>
          )}
        </div>
      </div>
    </>
  );
};

export { UsersModal };
