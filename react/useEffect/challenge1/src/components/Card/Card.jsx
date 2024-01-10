const Card = ({ name, age, location }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{location}</p>
    </div>
  );
};

export default Card;
