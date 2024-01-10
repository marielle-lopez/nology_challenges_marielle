import { useState } from "react";
import "./App.scss";

import SearchBar from "./components/SearchBar/SearchBar";
import SearchResultsList from "./containers/SearchResultsList/SearchResultsList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <h1>Get Users</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      {searchTerm && <SearchResultsList searchTerm={searchTerm} />}
    </>
  );
}

export default App;
