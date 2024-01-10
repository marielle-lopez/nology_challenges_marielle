import styles from "./SearchResultsList.module.scss";

import Card from "../../components/Card/Card";

const SearchResultsList = ({ searchTerm, usersData }) => {
  return (
    <div className={styles.wrapper}>
      {searchTerm && (
        <p className={styles.feedback_text}>
          You searched for {searchTerm} user{searchTerm == 1 ? "" : "s"}
        </p>
      )}
      <div className={styles.results_wrapper}>
        {usersData &&
          usersData.map((user) => (
            <Card
              key={user.name}
              name={user.name}
              age={user.age}
              location={user.location}
              imageURL={user.imageURL}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchResultsList;
