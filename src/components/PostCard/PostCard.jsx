import React from "react";
import userImg from "../../assets/userOne.jpg";
import userImgTwo from "../../assets/userTwo.jpg";
import { BsThreeDotsVertical, BsHeart, BsBookmark } from "react-icons/bs";
import { VscCommentDiscussion } from "react-icons/vsc";
import profile from "../../assets/profile.jpg";
import "./PostCard.css";

const PostCard = () => {
  return (
    <div className="post-card">
      <div className="post-card-header">
        <div className="post-card-user-info">
          <div className="user-avatar">
            <img src={userImg} alt="user" />
          </div>
          <div className="user-info-details">
            <h3>Dan Brown</h3>
          </div>
          <div className="user-info-handle">
            <p>@danbrown</p>
          </div>
        </div>
        <div className="post-card-header-actions">
          <button className="post-card-menu-btn">
            <BsThreeDotsVertical />
          </button>

          <ul className="post-card-menu">
            <li className="post-card-menu-item">Edit</li>
            <li className="post-card-menu-item">Delete</li>
          </ul>
        </div>
      </div>
      <div className="post-card-content">
        <p className="post-card-text">
          Today is the best day of my life, i got my first job.
        </p>
        <div className="post-card-img">
          <img src={profile} alt="post" />
        </div>
      </div>
      <div className="post-card-actions">
        <div className="post-card-action flex">
          <button className="post-card-action-btn flex">
            <BsHeart />
          </button>
          <p className="counter-value">2</p>
        </div>
        <div className="post-card-action flex">
          <button className="post-card-action-btn flex">
            <VscCommentDiscussion />
          </button>
          <p className="counter-value">2</p>
        </div>
        <div className="post-card-action">
          <button className="post-card-action-btn flex">
            <BsBookmark />
          </button>
        </div>
      </div>
      <div className="post-card-comment">
        <input type="text" name="comment" placeholder="Add Comment..." />
        <button className="post-card-action-btn post-btn">Post</button>
      </div>
      <div className="post-cards-container">
        <div className="post-card-comments">
          <div className="comments-avatar">
            <img src={userImgTwo} alt="user" />
          </div>
          <div className="comments-content">
            <h4>
              John Doe <span className="comments-handle">@johnd</span>
            </h4>
            <p>What about you?</p>
          </div>
        </div>
        <div className="post-card-comments">
          <div className="comments-avatar">
            <img src={userImgTwo} alt="user" />
          </div>
          <div className="comments-content">
            <h4>
              John Doe <span className="comments-handle">@johnd</span>
            </h4>
            <p>What about you?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PostCard };
