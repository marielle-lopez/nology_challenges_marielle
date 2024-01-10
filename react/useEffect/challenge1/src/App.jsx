import { useState, useEffect } from "react";
import "./App.scss";

import SearchBar from "./components/SearchBar/SearchBar";
import SearchResultsList from "./containers/SearchResultsList/SearchResultsList";

import { fetchUsersData } from "./data/getUsersData";

function App() {
  const [searchTerm, setSearchTerm] = useState(null);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    if (searchTerm === null) {
      return;
    }

    console.log(searchTerm);

    fetchUsersData(searchTerm).then((response) => {
      setUsersData(response);
      console.log(response);
    });
  }, [searchTerm]);

  return (
    <>
      <h1>Get Users</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      {searchTerm && <SearchResultsList searchTerm={searchTerm} />}
    </>
  );
}

export default App;
