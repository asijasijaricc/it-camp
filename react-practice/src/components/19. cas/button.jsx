const Button = ({ tek }) => {
  return (
    <div>
      <button
        style={{
          width: "100px",
          height: "40px",
          backgroundColor: "blue",
          color: "white",
          borderColor: "blue",
          borderRadius: "5px",
        }}
      >
        {tek}
      </button>
    </div>
  );
};

export default Button;
