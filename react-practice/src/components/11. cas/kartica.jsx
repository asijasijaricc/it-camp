const Kartica = (props) => {
  return (
    <div>
      {value.url && <img src={props.value} alt="" style={{ width: "280px" }} />}
      <p style={{ fontSize: 20, color: "grey" }}>same</p>
      <p style={{ margin: 0, fontSize: 30 }}>{props.title}</p>
    </div>
  );
};

export default Kartica;
