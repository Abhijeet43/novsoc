import React from "react";
import { BiTrendingUp } from "react-icons/bi";
import "./Filter.css";

const Filter = ({ trending, setTrending, sortBy, setSortBy }) => {
  return (
    <section className="filter-container">
      <button
        className={`btn ${
          trending ? "btn-primary" : "btn-outline-primary"
        }  trending`}
        onClick={() => {
          setSortBy("");
          setTrending((prev) => !prev);
        }}
      >
        <span>Trending</span> <BiTrendingUp />
      </button>
      <select
        value={sortBy}
        onChange={(e) => {
          setSortBy(e.target.value);
          setTrending(false);
        }}
      >
        <option>Default</option>
        <option value="oldestFirst">Oldest</option>
        <option value="newestFirst">Newest</option>
      </select>
    </section>
  );
};

export { Filter };
