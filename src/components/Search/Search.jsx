import React, { useState, useRef, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import { UserCard } from "../UserCard/UserCard";
import { searchHandler } from "../../utils/";
import "./Search.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [isDebouncing, setIsDebouncing] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const timerRef = useRef();

  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    clearTimeout(timerRef.current);
    if (search !== "") {
      timerRef.current = setTimeout(() => {
        const result = searchHandler(users, search.toLowerCase());
        setSearchResult(result);
        setIsDebouncing(true);
      }, 300);
    }
    return () => setIsDebouncing(false);
  }, [search, users]);

  return (
    <div className="search-container">
      <div className="search">
        <button className="search-icon">
          <AiOutlineSearch />
        </button>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="search"
          placeholder="Search NovSoc"
        />
      </div>
      {isDebouncing && search ? (
        <div className="search-results">
          {searchResult.length > 0 ? (
            searchResult.map((user) => <UserCard key={user._id} user={user} />)
          ) : (
            <p className="not-found-text">No result found</p>
          )}
        </div>
      ) : null}
    </div>
  );
};

export { Search };
