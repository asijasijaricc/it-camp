const Child = ({ state, UpdateS }) => {
  return (
    <div>
      <p style={{ color: state % 2 === 0 ? "yellow" : "red" }}>child</p>
      <p>{state}</p>
      <button onClick={() => UpdateS(state + 2)}>click2</button>
      <p>{state}</p>
    </div>
  );
};

export default Child;
