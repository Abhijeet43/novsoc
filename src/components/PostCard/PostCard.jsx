import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CommentCard } from "../index";
import {
  BsThreeDotsVertical,
  BsHeart,
  BsBookmark,
  BsFillHeartFill,
} from "react-icons/bs";
import { VscCommentDiscussion } from "react-icons/vsc";
import { useToggle } from "../../hooks/useToggle";
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/asyncThunk";
import "./PostCard.css";
import { toast } from "react-toastify";

const PostCard = ({ post }) => {
  const {
    _id: id,
    firstName,
    lastName,
    username,
    content,
    avatarURL,
    img,
    likes: { likeCount, likedBy },
    comments,
  } = post;
  const [showComment, setShowComment] = useToggle(false);
  const [showMenu, setShowMenu] = useToggle(false);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);

  const likedByUser = likedBy.some((like) => like.username === user?.username);

  const deletePostHandler = async (post) => {
    const response = await dispatch(deletePost({ post, token }));
    try {
      if (response?.payload.status === 201) {
        toast.info("Post Deleted Successfully!!");
      } else {
        toast.error(`${response.payload.data.errors[0]}`);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setShowMenu(false);
    }
  };

  return (
    <div className="post-card">
      <div className="post-card-header">
        <div
          className="post-card-user-info"
          onClick={() => navigate(`/profile/${username}`)}
        >
          <div className="user-avatar">
            <img src={avatarURL} alt="user" />
          </div>
          <div className="user-info-details">
            <h3>{`${firstName} ${lastName}`}</h3>
          </div>
          <div className="user-info-handle">
            <p>@{username}</p>
          </div>
        </div>
        <div className="post-card-header-actions">
          <button className="post-card-menu-btn" onClick={setShowMenu}>
            <BsThreeDotsVertical />
          </button>
          <ul
            className={`post-card-menu ${
              showMenu ? "post-card-menu-active" : ""
            }`}
          >
            <li className="post-card-menu-item">Edit</li>
            <li
              className="post-card-menu-item"
              onClick={() => deletePostHandler(post)}
            >
              Delete
            </li>
          </ul>
        </div>
      </div>
      <div className="post-card-content">
        <p className="post-card-text">{content}</p>
        {img ? (
          <div className="post-card-img">
            <img src={img} alt="post" />
          </div>
        ) : null}
      </div>
      <div className="post-card-actions">
        <div className="post-card-action flex">
          <button className="post-card-action-btn flex">
            {likedByUser ? <BsFillHeartFill className="liked" /> : <BsHeart />}
          </button>
          <p className="counter-value">{likeCount}</p>
        </div>
        <div className="post-card-action flex">
          <button
            className="post-card-action-btn flex"
            onClick={setShowComment}
          >
            <VscCommentDiscussion />
          </button>
          <p className="counter-value">{comments?.length}</p>
        </div>
        <div className="post-card-action">
          <button className="post-card-action-btn flex">
            <BsBookmark />
          </button>
        </div>
      </div>
      {showComment ? (
        <div className="post-card-comment">
          <input
            type="text"
            className="comment"
            name="comment"
            placeholder="Add Comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            disabled={comment === "" ? true : false}
            className="post-card-action-btn post-btn"
          >
            Post
          </button>
        </div>
      ) : null}

      {comments?.length > 0 ? (
        <div className="post-cards-container">
          {comments.map((comment) => (
            <CommentCard key={comment._id} comment={comment} postId={id} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export { PostCard };
