const Baner = ({ slika }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: "1200px", height: "400px", borderRadius: "8px" }}
        src={slika}
        alt=""
      />
    </div>
  );
};

export default Baner;
