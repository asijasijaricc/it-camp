import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <p className="name">Name: {props.name}</p>
      <p className="surname">Surname: {props.surname}</p>
    </div>
  );
};

export default Card;
