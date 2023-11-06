const Size = (props) => {
  return (
    <select>
      {props?.list &&
        props.list.length &&
        props.list.map((element, index) => (
          <option key={index}>{element}</option>
        ))}
    </select>
  );
};

export default Size;
