const Divider = ({ hr }) => {
  return (
    <div>
      <hr
        style={{
          width: "50px",
          height: "5px",
          borderRadius: "3px",
          backgroundColor: "blue",
        }}
      />
      {hr}
    </div>
  );
};

export default Divider;
