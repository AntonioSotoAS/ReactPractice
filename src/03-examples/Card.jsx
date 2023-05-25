
const Card = ({ name, image, status, type, gender }) => {
  return (
    <div className="card">
      <h3 className="card__name">{name}</h3>
      <img src={image} alt={name} className="card__image" />
      <div className="card__content">
        <p className="card__status">Status: {status}</p>
        <p className="card__type">Type: {type}</p>
        <p className="card__gender">Gender: {gender}</p>
      </div>
    </div>
  );
};

export default Card;
