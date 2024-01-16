import Card from "../../components/Card/Card";
import { getStarships } from "../../data/starships";
import styles from "./CardList.module.scss";
import { useState, useEffect } from "react";
import Button from "../../components/Button/Button";

// const dummyData = [
//   {
//     name: "ship1",
//     manufacturer: "manufacturer1",
//     length: 1,
//   },
//   {
//     name: "ship2",
//     manufacturer: "manufacturer2",
//     length: 2,
//   },
// ];

const CardList = ({ searchTerm }) => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    setLoading(true);
    getStarships().then((results) => {
      setLoading(false);
      setStarships(results);
    });
  }, []);

  let dataToRender = [...starships];

  if (isSorted) {
    dataToRender = [...dataToRender].sort(
      (ship, nextShip) => ship.length - nextShip.length
    );
  }

  if (searchTerm) {
    dataToRender = dataToRender.filter((starship) =>
      starship.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <Button handleClick={() => setIsSorted(true)} type={"primary"}>
            Sort by length
          </Button>
          {isSorted && (
            <Button handleClick={() => setIsSorted(false)} type={"secondary"}>
              Reset
            </Button>
          )}
          <section className={styles.list}>
            {dataToRender.map((ship, i) => (
              <Card
                key={ship.name}
                name={ship.name}
                manufacturer={ship.manufacturer}
                length={ship.length}
                index={i}
              />
            ))}
          </section>
        </>
      )}
    </>
  );
};

export default CardList;
