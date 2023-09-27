import "./kartica.css";

const Kartica = (props) => {
  return (
    <div className="karta">
      <div>
        <img src={props.img} alt="" />
      </div>
      <div className="manja">
        <p className="broj">{props.broj}</p>
        <p className="nzm">{props.fajl}</p>
      </div>
    </div>
  );
};

export default Kartica;
