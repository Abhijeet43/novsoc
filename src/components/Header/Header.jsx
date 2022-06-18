import React from "react";
import { AiOutlineHome, AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = ({ setShowPostModal }) => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-brand">
          <h1>
            <Link to="/home">
              <span className="black">Nov</span>
              <span className="primary">Soc</span>
            </Link>
          </h1>
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <button
              className="create-post-btn nav-header-link"
              onClick={() => setShowPostModal(true)}
            >
              <AiOutlinePlusCircle title="Create Post" />
            </button>
          </li>
          <li className="nav-item">
            <NavLink to="/home" className="nav-header-link home">
              <AiOutlineHome title="Home" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/explore" className="nav-header-link">
              <MdOutlineExplore title="Explore" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/bookmark" className="nav-header-link">
              <BsBookmark title="Bookmark" />
            </NavLink>
          </li>

          <li className="nav-item" title="Profile">
            <button onClick={() => navigate(`/profile/${user.username}`)}>
              <div className="user-avatar">
                {user?.avatarURL !== "" ? (
                  <img src={user?.avatarURL} alt="user-profile" />
                ) : (
                  <p className="avatar-text">{`${user?.firstName[0].toUpperCase()}${user?.lastName[0].toUpperCase()}`}</p>
                )}
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
