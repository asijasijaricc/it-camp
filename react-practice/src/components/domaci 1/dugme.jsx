const Dugme = ({ type, text }) => {
  const razlicito = () => {
    switch (type) {
      case "default":
        return {
          boredColor: "black",
          color: "black",
        };
      case "filled":
        return {
          border: "none",
          color: "white",
        };
    }
  };
  return <button style={{ razlicito }}>{text}</button>;
};

export default Dugme;
