import { useEffect, useState } from "react";
import { fetchStarshipsData } from "../../data/getStarships";
import cardStyles from "./Card.module.scss";

const Card = ({ starshipData, styles }) => {
  const customStyles = [styles, cardStyles.card].join(" ");

  return (
    <div className={customStyles}>
      <h3 className={cardStyles.title}>{starshipData.name}</h3>
      <p className={cardStyles.text_primary}>{starshipData.manufacturer}</p>
      <p className={cardStyles.text_secondary}>{starshipData.length}</p>
    </div>
  );
};

export default Card;
