import { useState } from "react";

const SearchBar = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };

  return (
    <form>
      <input
        type="number"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
