const Dugme = ({ izgled = "default", text }) => {
  const razlicito = () => {
    switch (izgled) {
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
  return <button style={{ izgled }}>{text}</button>;
};

export default Dugme;
