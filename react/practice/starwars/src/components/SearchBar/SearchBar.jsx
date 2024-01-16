import { useState, useRef } from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ setSearchTerm, setShowSearchResults }) => {
  const input = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input.current);
  };

  const handleReset = () => {
    input.reset();
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input
        className={styles.search_bar}
        type="text"
        name="searchBar"
        onChange={(e) => (input.current = e.target.value)}
      />
      <button type="submit">Search</button>
      <button
        onClick={() => {
          setShowSearchResults(false);
        }}
      >
        Reset
      </button>
    </form>
  );
};

export default SearchBar;
