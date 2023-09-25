import "./avatar.css";

const Avatar = (props) => {
  const { name } = props;
  //   props.name;
  return (
    <div className="name">
      <img
        src="https://images.unsplash.com/photo-1603984973710-e915353b35fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1hemluZyUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        alt=""
      />
      <div className="dole">
        <p className="ime">{name}</p>
        <p className="marka">UI desinger</p>
      </div>
    </div>
  );
};

export default Avatar;
