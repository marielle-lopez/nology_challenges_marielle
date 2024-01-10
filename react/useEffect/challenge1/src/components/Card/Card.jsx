import styles from "./Card.module.scss";

const Card = ({ name, age, location, imageURL }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={imageURL} alt={name} />
      <div className={styles.info_wrapper}>
        <h3 className={styles.heading}>{name}</h3>
        <p className={styles.text_location}>{location}</p>
        <p className={styles.text_age}>{age} years old</p>
      </div>
    </div>
  );
};

export default Card;
