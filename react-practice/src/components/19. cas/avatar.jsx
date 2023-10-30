const Avatar = ({ slika2 }) => {
  return (
    <div>
      <img
        style={{ width: "250px", borderRadius: "50%" }}
        src={slika2}
        alt=""
      />
    </div>
  );
};

export default Avatar;
