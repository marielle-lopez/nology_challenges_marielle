import { useState } from "react";

import styles from "./SearchBar.module.scss";

const SearchBar = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };

  return (
    <form className={styles.wrapper}>
      <input
        className={styles.input}
        type="number"
        placeholder="Enter a number"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button className={styles.button} type="submit" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
