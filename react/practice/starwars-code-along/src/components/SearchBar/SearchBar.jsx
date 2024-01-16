import { useRef } from "react";
import Button from "../Button/Button";
const SearchBar = ({ setSearchTerm }) => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchBar;
