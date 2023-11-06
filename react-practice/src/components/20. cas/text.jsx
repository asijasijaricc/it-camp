const Text = ({ type = "h1", text, color, bold = false }) => {
  const getType = () => {
    switch (type) {
      case "h1":
        return { fontSize: 30 };
      case "h4":
        return { fontSize: 19 };
      case "title":
        return {};
      case "normal":
        return { fontSize: 21 };
      case "price":
        return { fontSize: 21 };
    }
  };
  const pStyle = { ...getType(), color, fontWeight: bold ? 700 : 400 };
  return (
    <div>
      <p style={pStyle}>{text}</p>
    </div>
  );
};

export default Text;
