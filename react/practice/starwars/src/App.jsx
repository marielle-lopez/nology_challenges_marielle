import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { fetchStarshipsData } from "./data/getStarships";
import cardStyles from "./components/Card/Card.module.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import FlexWrapper from "./containers/FlexWrapper";

function App() {
  const [starships, setStarships] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStarships, setFilteredStarships] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [sortedStarships, setSortedStarships] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchStarshipsData().then((response) => setStarships(response));
    setShowSearchResults(false);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setShowSearchResults(false);
      return;
    }

    const filteredData = starships.filter((starship) =>
      starship.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredStarships(filteredData);
    setShowSearchResults(true);
  }, [searchTerm]);

  const handleSort = () => {
    const starshipsCopy = [...starships];
    starshipsCopy.sort((a, b) => a.length - b.length);
    setSortedStarships(starshipsCopy);
  };

  return (
    <>
      <h1>Starwars Starships</h1>

      <SearchBar
        setSearchTerm={setSearchTerm}
        setShowSearchResults={setShowSearchResults}
      />

      {loading && <p>Loading...</p>}

      {showSearchResults && (
        <FlexWrapper>
          {filteredStarships.map((starship, i) => (
            <Card
              key={starship.name}
              starshipData={starship}
              styles={i % 2 === 0 ? cardStyles.even_card : cardStyles.odd_card}
            />
          ))}
        </FlexWrapper>
      )}

      {showSearchResults && filteredStarships.length === 0 && (
        <p>No search results</p>
      )}

      {!showSearchResults && (
        <>
          <button onClick={handleSort}>Sort by length</button>
          <FlexWrapper>
            {starships?.map((starship, i) => (
              <Card
                key={starship.name}
                starshipData={starship}
                styles={
                  i % 2 === 0 ? cardStyles.even_card : cardStyles.odd_card
                }
              />
            ))}
          </FlexWrapper>
        </>
      )}
    </>
  );
}

export default App;
