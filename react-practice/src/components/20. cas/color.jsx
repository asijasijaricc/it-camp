const Color = ({ backgroundColor }) => {
  const backg = {
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    marginTop: "7px",
    margin: "3px",
    backgroundColor,
  };
  return (
    <div>
      <button style={backg}></button>
    </div>
  );
};

export default Color;
