import React from "react";
import { AiOutlineHome, AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useSelector((state) => state.auth);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-brand">
          <h1>
            Nov<span className="primary">Soc</span>
          </h1>
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/home">
              <AiOutlineHome title="Home" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/explore">
              <MdOutlineExplore title="Explore" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/bookmark">
              <BsBookmark title="Bookmark" />
            </NavLink>
          </li>
          {location.pathname === "/home" ? (
            <li className="nav-item">
              <button className="create-post-btn">
                <AiOutlinePlusCircle title="Create Post" />
              </button>
            </li>
          ) : null}

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
