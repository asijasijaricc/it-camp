import "./button.css";

const Button = ({ title = "click", style = {}, className = "", onPress }) => {
  return (
    <button
      className={`btn ${className}`}
      style={style}
      onClick={() => {
        if (onPress) onPress();
      }}
    >
      {title}
    </button>
  );
};

export default Button;
