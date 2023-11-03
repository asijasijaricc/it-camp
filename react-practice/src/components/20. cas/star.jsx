import Zvezdica from "./zvezdica";

const Star = (props) => {
  return (
    <>
      {props.value >= 1 ? <Zvezdica color="red" /> : <Zvezdica color="black" />}
      {props.value >= 2 ? <Zvezdica color="red" /> : <Zvezdica color="pink" />}
      {props.value >= 3 ? <Zvezdica color="red" /> : <Zvezdica color="pink" />}
      {props.value >= 3 ? <Zvezdica color="red" /> : <Zvezdica color="pink" />}
      {props.value >= 4 ? <Zvezdica color="red" /> : <Zvezdica color="pink" />}
    </>
  );
};

export default Star;
