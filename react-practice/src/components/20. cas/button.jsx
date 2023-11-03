const Button = ({ tekst }) => {
  return (
    <div>
      <button
        style={{
          width: "70px",
          height: "40px",
          backgroundColor: "blue",
          color: "white",
          borderRadius: "5px",
          border: "none",
        }}
      >
        {tekst}
      </button>
    </div>
  );
};

export default Button;
