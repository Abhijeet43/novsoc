import React from "react";
import "./CommentCard.css";

const CommentCard = ({ comment, postId }) => {
  return (
    <div className="post-card-comments">
      <div className="comments-avatar">
        <img src={comment.avatarURL} alt="user" />
      </div>
      <div className="comments-content">
        <h4>
          {`${comment.firstName} ${comment.lastName}`}{" "}
          <span className="comments-handle">@{comment.username}</span>
        </h4>
        <p>{comment.commentData}</p>
      </div>
    </div>
  );
};

export { CommentCard };
