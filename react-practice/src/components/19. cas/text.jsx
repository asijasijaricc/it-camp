const Text = ({ text, type }) => {
  return (
    <div>
      <p
        style={{
          fontSize: "20px",
          fontWeight: type === "title" ? "700" : "400",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default Text;
