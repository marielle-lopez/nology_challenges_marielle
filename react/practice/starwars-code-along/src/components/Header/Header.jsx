import SearchBar from "../SearchBar/SearchBar";

const Header = ({ setSearchTerm }) => {
  return (
    <header>
      <h1>Star Wars Spaceships</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
    </header>
  );
};

export default Header;
