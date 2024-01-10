import { useState, useEffect } from "react";

import SearchBar from "../../components/SearchBar/SearchBar"
import SearchResultsList from "../SearchResultsList/SearchResultsList";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { fetchUsersData } from "../../data/getUsersData";

const RandomUserLoader = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm === null || searchTerm < 1) {
      return;
    }

    setLoading(true);

    fetchUsersData(searchTerm)
    .then((response) => {
      setUsersData(response);
    })
    .catch((e) => setError(e))
    .finally(setLoading(false));
  }, [searchTerm]);

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <SearchResultsList searchTerm={searchTerm} usersData={usersData} />
      )}
      {/* {!loading && error && <p>{error.message}</p>} */}
    </>    
  )
}

export default RandomUserLoader