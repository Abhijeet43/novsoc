import React from "react";
import { AiOutlineHome, AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import userImg from "../../assets/userOne.jpg";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <navbar className="navbar">
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
          <li className="nav-item">
            <button>
              <AiOutlinePlusCircle title="Create Post" />
            </button>
          </li>
          <li className="nav-item" title="Profile">
            <button onClick={() => navigate("/profile")}>
              <div className="user-avatar">
                <img src={userImg} alt="user-profile" />
              </div>
            </button>
          </li>
        </ul>
      </navbar>
    </header>
  );
};

export { Header };
