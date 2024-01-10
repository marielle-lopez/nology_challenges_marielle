const SearchResultsList = ({ searchTerm }) => {
  return <>{searchTerm && <p>You searched for {searchTerm} user(s)</p>}</>;
};

export default SearchResultsList;
