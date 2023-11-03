const Picture = ({ slika }) => {
  return (
    <div>
      <img
        style={{ width: "600px", height: "600px", borderRadius: "7px" }}
        src={slika}
        alt=""
      />
    </div>
  );
};

export default Picture;
