import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useToggle } from "../../hooks/useToggle";
import { EditCommentModal } from "../index";
import { deleteComment } from "../../redux/asyncThunk";
import { toast } from "react-toastify";
import "./CommentCard.css";

const CommentCard = ({ comment, postId }) => {
  const [showCommentMenu, setShowCommentMenu] = useToggle(false);
  const [showCommentModal, setShowCommentModal] = useState(false);

  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // DELETE COMMENT
  const deleteCommentHandler = async () => {
    const response = await dispatch(
      deleteComment({ postId, commentId: comment._id, token })
    );
    if (response?.payload.status === 201) {
      toast.info("Comment deleted successfully!!");
    } else {
      toast.error(response.payload.data.errors[0]);
    }
  };

  return (
    <div className="post-card-comments-container">
      <div className="post-card-comments">
        <div className="comments-avatar">
          <Link to={`/profile/${comment.username}`}>
            <img
              src={
                comment.username === user.username
                  ? user.avatarURL
                  : comment.avatarURL
              }
              alt="user"
            />
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
                <li
                  className="comments-menu-item"
                  onClick={() => {
                    setShowCommentModal(true);
                    setShowCommentMenu(false);
                  }}
                >
                  Edit
                </li>
                <li
                  className="comments-menu-item"
                  onClick={() => {
                    deleteCommentHandler();
                    setShowCommentMenu(false);
                  }}
                >
                  Delete
                </li>
              </ul>
            ) : null}
          </>
        ) : null}

        {showCommentModal ? (
          <EditCommentModal
            setShowCommentModal={setShowCommentModal}
            postId={postId}
            commentData={comment.commentData}
            commentId={comment._id}
          />
        ) : null}
      </div>
    </div>
  );
};

export { CommentCard };
