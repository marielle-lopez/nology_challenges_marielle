import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CardList from "./containers/CardList/CardList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header setSearchTerm={setSearchTerm} />
      <CardList searchTerm={searchTerm} />
    </>
  );
}

export default App;
