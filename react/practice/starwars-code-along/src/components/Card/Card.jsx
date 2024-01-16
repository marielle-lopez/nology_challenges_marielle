import styles from "./Card.module.scss";

const Card = ({
  name = "Unknown name",
  manufacturer = "Unknown manufacturer",
  length = "Unknown length",
  index = 0,
}) => {
  const classes = [styles.card];

  index % 2 ? classes.push(styles.card_even) : classes.push(styles.card_odd);

  return (
    <article className={classes.join(" ")}>
      <h3>Name: {name}</h3>
      <p>Manufacturer: {manufacturer}</p>
      <p>Length: {length}</p>
    </article>
  );
};

export default Card;
