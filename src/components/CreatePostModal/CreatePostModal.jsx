import React, { useState, useRef } from "react";
import "./CreatePostModal.css";
import { saveImageToCloudindary } from "../../services/";
import { addPost } from "../../redux/asyncThunk/";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes, FaImage } from "react-icons/fa";
import { toast } from "react-toastify";

const CreatePostModal = ({ setShowPostModal, showPostModal }) => {
  const [length, setLength] = useState(0);
  const [postImg, setPostImg] = useState({ imageURL: "", imageFile: {} });
  const postRef = useRef();

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const reader = new FileReader();

  const addImageHandler = (e) => {
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPostImg({ imageURL: reader.result, imageFile: e.target.files[0] });
      }
    };
  };

  const closePostModal = () => {
    setPostImg({ imageURL: "", imageFile: {} });
    setLength(0);
    postRef.current.value = "";
    setShowPostModal(false);
  };

  const savePostData = async (data) => {
    try {
      const response = await dispatch(addPost({ postData: data, token }));
      if (response?.payload.status === 201) {
        toast.info("Post successfully added");
      } else {
        toast.error(response.payload.data.errors[0]);
      }
      closePostModal();
    } catch (error) {
      toast.error(error);
    }
  };

  const addPostHandler = async () => {
    if (postRef.current.value !== "") {
      if (postImg.imageURL !== "") {
        const type = postImg.imageURL.includes("video") ? "video" : "image";
        await saveImageToCloudindary(
          postImg.imageFile,
          savePostData,
          {
            content: postRef.current.value.trim(),
            img: postImg.imageURL || "",
          },
          type,
          "post"
        );
      } else if (postRef.current.value.trim() !== "") {
        savePostData({ content: postRef.current.value });
      } else {
        toast.warning("Post cannot empty");
      }
    } else {
      toast.warning("Post cannot be empty");
    }
  };

  return (
    <>
      <div
        onClick={closePostModal}
        className={`create-post-overlay ${
          showPostModal ? "create-post-overlay-active" : ""
        }`}
      ></div>
      <div
        className={`create-post-modal ${
          showPostModal ? "create-post-modal-active" : ""
        }`}
      >
        <div className="create-post-header">
          <h2>Add New Post</h2>
          <button onClick={closePostModal}>
            <FaTimes />
          </button>
        </div>
        <div className="create-post-text">
          <textarea
            rows="6"
            ref={postRef}
            maxLength="200"
            defaultValue=""
            onChange={(e) => setLength(e.target.value.length)}
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
            {postImg.imageURL !== "" ? (
              <div className="upload-prev-btns">
                <span>
                  {postImg.imageURL.includes("video") ? "Video" : "Image"}
                </span>
                <button
                  className="flex"
                  onClick={() => setPostImg({ imageURL: "", imageFile: {} })}
                >
                  <FaTimes />
                </button>
              </div>
            ) : null}
          </div>
          <p className="char-count">
            <span>{length}</span>/200
          </p>
          <div className="create-post-action">
            <button className="btn btn-primary" onClick={addPostHandler}>
              Post
            </button>
            <button className="btn btn-cancel" onClick={closePostModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { CreatePostModal };
