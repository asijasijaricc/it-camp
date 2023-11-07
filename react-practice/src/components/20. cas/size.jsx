const Size = (props) => {
  return (
    <select style={{ width: "50px", height: "40px", fontSize: "16px" }}>
      {props?.list &&
        props.list.length &&
        props.list.map((element, index) => (
          <option key={index}>{element}</option>
        ))}
    </select>
  );
};

export default Size;
