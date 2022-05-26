import React from "react";
import { BiTrendingUp } from "react-icons/bi";
import "./Sort.css";

const Sort = () => {
  return (
    <section className="sort-container">
      <button className="btn btn-primary trending">
        <span>Trending</span> <BiTrendingUp />
      </button>
      <select>
        <option>Default</option>
        <option value="oldest">Oldest</option>
        <option value="newest">Newest</option>
      </select>
    </section>
  );
};

export { Sort };
