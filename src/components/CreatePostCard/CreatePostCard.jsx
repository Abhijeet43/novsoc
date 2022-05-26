import React from "react";
import "./CreatePostCard.css";
import { FaTimes, FaImage } from "react-icons/fa";

const CreatePostCard = () => {
  return (
    <>
      <div className="create-post-overlay"></div>
      <div className="create-post-modal">
        <div className="create-post-header">
          <h2>Add New Post</h2>
          <button>
            <FaTimes />
          </button>
        </div>
        <div className="create-post-text">
          <textarea
            rows="6"
            maxlength="200"
            placeholder="How are you feeling today"
          ></textarea>
        </div>
        <div className="create-post-footer">
          <label htmlFor="post-image">
            <input type="file" id="post-image" />
            <FaImage />
          </label>
          <p className="char-count">
            <span>0</span>/200
          </p>
          <div className="create-post-action">
            <button className="btn btn-primary">Post</button>
            <button className="btn btn-cancel">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export { CreatePostCard };
