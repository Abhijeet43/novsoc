import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CommentCard } from "../index";
import {
  BsThreeDotsVertical,
  BsHeart,
  BsBookmark,
  BsFillBookmarkFill,
  BsFillHeartFill,
} from "react-icons/bs";
import { VscCommentDiscussion } from "react-icons/vsc";
import { useToggle } from "../../hooks/useToggle";
import { CreatePostModal } from "../index";
import {
  deletePost,
  likePost,
  dislikePost,
  bookmarkPost,
  removeFromBookmark,
  addComment,
} from "../../redux/asyncThunk";
import { toast } from "react-toastify";
import "./PostCard.css";

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
    createdAt,
  } = post;
  const [showComment, setShowComment] = useToggle(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const [showMenu, setShowMenu] = useToggle(false);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, token, bookmarks } = useSelector((state) => state.auth);

  // LIKE FUNCTIONALITY
  const likedByUser = likedBy.some((like) => like.username === user?.username);

  const likeHandler = async (postId) =>
    likedByUser
      ? await dispatch(dislikePost({ postId, token }))
      : await dispatch(likePost({ postId, token }));

  // BOOKMARK FUNCTIONALITY
  const bookmarkedByUser = bookmarks.some((currId) => currId === id);

  const bookmarkHandler = async (postId) =>
    bookmarkedByUser
      ? await dispatch(removeFromBookmark({ postId, token }))
      : await dispatch(bookmarkPost({ postId, token }));

  // DELETE POST
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

  // ADD COMMENT
  const addCommentHandler = async () => {
    const response = await dispatch(addComment({ id, comment, token }));
    if (response?.payload.status === 201) {
      toast.info("Comment Added Successfully!!");
      setComment("");
      setShowComment(false);
    } else {
      toast.error(response.payload.data.errors[0]);
    }
  };

  // GET DATE
  const getDate = (createdAt) => {
    const date = new Date(createdAt).toLocaleString("en-In", {
      day: "2-digit",
    });
    const month = new Date(createdAt).toLocaleString("en-In", {
      month: "short",
    });
    const year = new Date(createdAt).getFullYear();
    return `${date} ${month} ${year}`;
  };

  return (
    <div className="post-card">
      <div className="post-card-header">
        <div
          className="post-card-user-info"
          onClick={() => navigate(`/profile/${username}`)}
        >
          <div className="user-avatar">
            <img
              src={username === user.username ? user.avatarURL : avatarURL}
              alt="user"
            />
          </div>
          <div className="user-info-details">
            <h3>{`${firstName} ${lastName}`}</h3>
            <p className="user-info-mob-handle">@{username}</p>
          </div>
          <div className="user-info-handle">
            <p>@{username}</p>
          </div>
          <div className="post-date">
            <p>{getDate(createdAt)}</p>
          </div>
        </div>
        <div className="post-card-header-actions">
          {username === user.username ? (
            <>
              <button className="post-card-menu-btn" onClick={setShowMenu}>
                <BsThreeDotsVertical />
              </button>
              {showMenu ? (
                <ul className="post-card-menu post-card-menu-active">
                  <li
                    className="post-card-menu-item"
                    onClick={() => {
                      setShowPostModal(true);
                      setShowMenu(false);
                    }}
                  >
                    Edit
                  </li>
                  <li
                    className="post-card-menu-item"
                    onClick={() => deletePostHandler(post)}
                  >
                    Delete
                  </li>
                </ul>
              ) : null}
            </>
          ) : null}
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
          <button
            className="post-card-action-btn flex"
            onClick={() => {
              likeHandler(id);
            }}
            title="Like"
          >
            {likedByUser ? <BsFillHeartFill className="liked" /> : <BsHeart />}
          </button>
          <p className="counter-value">{likeCount}</p>
        </div>
        <div className="post-card-action flex">
          <button
            className="post-card-action-btn flex"
            onClick={setShowComment}
            title="Comments"
          >
            <VscCommentDiscussion />
          </button>
          <p className="counter-value">{comments?.length}</p>
        </div>
        <div className="post-card-action">
          <button
            className="post-card-action-btn flex"
            onClick={() => bookmarkHandler(id)}
            title="Bookmark"
          >
            {bookmarkedByUser ? (
              <BsFillBookmarkFill className="bookmarked" />
            ) : (
              <BsBookmark />
            )}
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
            onClick={addCommentHandler}
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

      {showPostModal ? (
        <CreatePostModal
          showPostModal={showPostModal}
          setShowPostModal={setShowPostModal}
          editData={true}
          postData={post}
        />
      ) : null}
    </div>
  );
};

export { PostCard };
