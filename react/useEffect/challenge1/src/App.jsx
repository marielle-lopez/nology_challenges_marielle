import { useState, useEffect } from "react";
import styles from "./App.module.scss";
import RandomUserLoader from "./containers/RandomUserLoader/RandomUserLoader";

function App() {
  return (
    <div className={styles.wrapper}>
      <h1>Get Users</h1>
      <RandomUserLoader />
    </div>
  );
}

export default App;
