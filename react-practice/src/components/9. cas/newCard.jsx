import "./newCard.css";

const NewCard = (props) => {
  return (
    <div className="neka">
      <img src={props.slika} alt="" />
      <p className="sivo">{props.jedan}</p>
      <h4 className="htag">{props.htag} </h4>
      <p className="tekst">{props.tekstic}</p>
      <a href="">{props.nekilink}</a>
    </div>
  );
};

export default NewCard;
