import React, { useState } from "react";
import "./CreatePostModal.css";
import { saveImageToCloudindary } from "../../services/";
import { addPost, editPost } from "../../redux/asyncThunk/";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes, FaImage } from "react-icons/fa";
import { toast } from "react-toastify";

const CreatePostModal = ({
  setShowPostModal,
  showPostModal,
  editData = false,
  postData = {},
}) => {
  const [post, setPost] = useState({
    content: editData ? postData.content : "",
  });

  const initialMediaData = {
    mediaURL: editData ? postData?.img || "" : "",
    mediaFile: {},
  };

  const [media, setMedia] = useState(initialMediaData);

  const [length, setLength] = useState(editData ? postData.content.length : 0);

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const reader = new FileReader();

  const updatePost = async (data) => {
    try {
      const updatedData = {
        _id: postData._id,
        content: data.content,
        img: data.img || media.mediaURL || null,
      };
      const response = await dispatch(editPost({ updatedData, token }));
      if (response?.payload.status === 201) {
        toast.info("Post updated successfully!!");
      } else {
        toast.error(response.payload.data.errors[0]);
      }
      closePostHandler();
    } catch (error) {
      toast.error(error);
    }
  };

  const editPostHandler = async () => {
    if (media.mediaURL !== "" && media.mediaURL !== postData.img) {
      const type = media.mediaURL.includes("video") ? "video" : "image";
      await saveImageToCloudindary(
        media.mediaFile,
        updatePost,
        post,
        type,
        "post"
      );
    } else if (post.content !== "") {
      updatePost(post);
    } else {
      toast.warning("Post can't be empty");
    }
  };

  const addImageHandler = (e) => {
    reader.readAsDataURL(e.target.files[0]);
    reader.onprogress = () => {
      if (e.target.files[0].size <= 5242880) {
        reader.onload = () => {
          if (reader.readyState === 2) {
            setMedia({ mediaURL: reader.result, mediaFile: e.target.files[0] });
          }
        };
      } else {
        toast.warning("File size should be less than 5MB");
        reader.abort();
        setMedia({ mediaURL: "", mediaFile: {} });
      }
    };
  };

  const createPost = async (data) => {
    try {
      const response = await dispatch(addPost({ postData: data, token }));
      if (response?.payload.status === 201) {
        toast.info("Post added successfully!!");
      } else {
        toast.error(response.payload.data.errors[0]);
      }
      closePostHandler();
    } catch (error) {
      toast.error(error);
    }
  };

  const addPostHandler = async () => {
    if (media.mediaURL !== "") {
      const type = media.mediaURL.includes("video") ? "video" : "image";
      await saveImageToCloudindary(
        media.mediaFile,
        createPost,
        post,
        type,
        "post"
      );
    } else if (post.content !== "") {
      createPost(post);
    } else {
      toast.warning("Post can't be empty");
    }
  };

  const closePostHandler = () => {
    if (!editData) {
      setPost({ content: "" });
      postData = {};
    }
    setMedia({ mediaURL: postData?.img || "", mediaFile: {} });
    setShowPostModal(false);
  };

  return (
    <>
      {showPostModal ? (
        <div
          onClick={closePostHandler}
          className="create-post-overlay create-post-overlay-active"
        ></div>
      ) : null}
      <div className="create-post-modal create-post-modal-active">
        <div className="create-post-header">
          <h2> {editData ? "Update Post" : "Add New Post"}</h2>
          <button onClick={closePostHandler}>
            <FaTimes />
          </button>
        </div>
        <div className="create-post-text">
          <textarea
            rows="6"
            maxLength="200"
            value={post.content}
            onChange={(e) => {
              setPost((prev) => ({ ...prev, content: e.target.value }));
              setLength(e.target.value.length);
            }}
            placeholder="How are you feeling today"
            required
          ></textarea>
        </div>
        <div className="create-post-footer">
          <div>
            <label htmlFor="post-image">
              <input type="file" id="post-image" onChange={addImageHandler} />
              <FaImage className="upload-icon" />
            </label>

            {media.mediaURL !== "" ? (
              <div className="upload-prev-btns">
                <span>
                  {media.mediaURL?.includes("video") ? "Video" : "Image"}
                </span>
                <button className="flex">
                  <FaTimes
                    onClick={() => setMedia({ mediaURL: "", mediaFile: {} })}
                  />
                </button>
              </div>
            ) : null}
          </div>
          <p className="char-count">
            <span>{length}</span>/200
          </p>
          <div className="create-post-action">
            <button
              className="btn btn-primary"
              onClick={editData ? editPostHandler : addPostHandler}
            >
              {editData ? "Update" : "Post"}
            </button>
            <button className="btn btn-cancel" onClick={closePostHandler}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { CreatePostModal };
