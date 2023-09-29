import "./input.css";

const Input = ({
  type = "text",
  className = "",
  style = {},
  OnChangeText,
  text,
  placeholder,
  ...other
}) => {
  return (
    <input
      type={type}
      style={style}
      placeholder={placeholder}
      className={`int ${className}`}
      onChange={(e) => OnChangeText(e.target.value)}
      {...other}
    />
  );
};

export default Input;
