const Button = ({ tek }) => {
  return (
    <div>
      <button
        style={{ width: "60px", height: "40px", backgroundColor: "blue" }}
      >
        {tek}
      </button>
    </div>
  );
};

export default Button;
