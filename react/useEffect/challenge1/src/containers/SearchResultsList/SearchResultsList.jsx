import Card from "../../components/Card/Card";

const SearchResultsList = ({ searchTerm, usersData }) => {
  return (
    <>
      {searchTerm && <p>You searched for {searchTerm} user(s)</p>}
      {usersData &&
        usersData.map((user) => (
          <Card
            key={user.id}
            name={user.name}
            age={user.age}
            location={user.location}
          />
        ))}
    </>
  );
};

export default SearchResultsList;
