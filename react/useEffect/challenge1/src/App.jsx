import { useState, useEffect } from "react";
import styles from "./App.module.scss";

import SearchBar from "./components/SearchBar/SearchBar";
import SearchResultsList from "./containers/SearchResultsList/SearchResultsList";

import { fetchUsersData } from "./data/getUsersData";

function App() {
  const [searchTerm, setSearchTerm] = useState(null);
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm === null || searchTerm < 1) {
      return;
    }

    setLoading(true);

    fetchUsersData(searchTerm).then((response) => {
      setUsersData(response);
      setLoading(false);
    });
  }, [searchTerm]);

  return (
    <div className={styles.wrapper}>
      <h1>Get Users</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <SearchResultsList searchTerm={searchTerm} usersData={usersData} />
      )}
    </div>
  );
}

export default App;
