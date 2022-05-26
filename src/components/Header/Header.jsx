import React from "react";
import { AiOutlineHome, AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import userImg from "../../assets/userOne.jpg";
import "./Header.css";

const Header = () => {
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
            <AiOutlineHome title="Home" />
          </li>
          <li className="nav-item">
            <MdOutlineExplore title="Explore" />
          </li>
          <li className="nav-item active">
            <BsBookmark title="Bookmark" />
          </li>
          <li className="nav-item">
            <AiOutlinePlusCircle title="Create Post" />
          </li>
          <li className="nav-item" title="Profile">
            <div className="user-avatar">
              <img src={userImg} alt="user-profile" />
            </div>
          </li>
        </ul>
      </navbar>
    </header>
  );
};

export { Header };
