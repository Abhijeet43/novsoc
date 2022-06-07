import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useToggle } from "../../hooks/useToggle";
import "./CommentCard.css";

const CommentCard = ({ comment }) => {
  const [showCommentMenu, setShowCommentMenu] = useToggle(false);
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="post-card-comments-container">
      <div className="post-card-comments">
        <div className="comments-avatar">
          <Link to={`/profile/${comment.username}`}>
            <img src={comment.avatarURL} alt="user" />
          </Link>
        </div>
        <div className="comments-content">
          <h4 className="comments-username">
            <Link to={`/profile/${comment.username}`}>
              {`${comment.firstName} ${comment.lastName}`}{" "}
              <span className="comments-handle">@{comment.username}</span>
            </Link>
          </h4>
          <p>{comment.commentData}</p>
        </div>
      </div>
      <div className="comments-actions">
        {user.username === comment.username ? (
          <>
            <button onClick={setShowCommentMenu}>
              <BsThreeDotsVertical />
            </button>
            {showCommentMenu ? (
              <ul className="comments-menu">
                <li className="comments-menu-item">Edit</li>
                <li className="comments-menu-item">Delete</li>
              </ul>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
};

export { CommentCard };
