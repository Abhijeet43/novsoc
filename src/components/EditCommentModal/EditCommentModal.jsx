import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import { editComment } from "../../redux/asyncThunk/";
import "./EditCommentModal.css";

const EditCommentModal = ({
  setShowCommentModal,
  postId,
  commentData,
  commentId,
}) => {
  const [comment, setComment] = useState(commentData || "");
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const editCommentHandler = async () => {
    if (comment === "") {
      toast.warning("Comment cannot be empty");
    } else {
      const response = await dispatch(
        editComment({ postId, commentId, comment, token })
      );
      if (response?.payload.status === 201) {
        toast.info("Comment updated successfully!!");
      } else {
        toast.error(response.payload.data.errors);
      }
      setShowCommentModal(false);
    }
  };

  return (
    <>
      <div
        className="create-post-overlay create-post-overlay-active"
        onClick={() => setShowCommentModal(false)}
      ></div>

      <div className="create-post-modal create-post-modal-active">
        <div className="create-post-header">
          <h2>Update Comment</h2>
          <button onClick={() => setShowCommentModal(false)}>
            <FaTimes />
          </button>
        </div>
        <div className="create-post-text">
          <textarea
            rows="6"
            maxLength="200"
            value={comment}
            placeholder="How are you feeling today"
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="edit-comment-footer">
          <div className="create-post-action">
            <button className="btn btn-primary" onClick={editCommentHandler}>
              Update
            </button>
            <button
              className="btn btn-cancel"
              onClick={() => setShowCommentModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { EditCommentModal };
