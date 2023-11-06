import Zvezdica from "./zvezdica";

const Star = (props) => {
  return (
    <>
      {props.value >= 1 ? (
        <Zvezdica color="blue" />
      ) : (
        <Zvezdica color="darkblue" />
      )}
      {props.value >= 2 ? (
        <Zvezdica color="blue" />
      ) : (
        <Zvezdica color="darkblue" />
      )}
      {props.value >= 3 ? (
        <Zvezdica color="blue" />
      ) : (
        <Zvezdica color="darkblue" />
      )}
      {props.value >= 3 ? (
        <Zvezdica color="blue" />
      ) : (
        <Zvezdica color="darkblue" />
      )}
      {props.value >= 4 ? (
        <Zvezdica color="blue" />
      ) : (
        <Zvezdica color="darkblue" />
      )}
    </>
  );
};

export default Star;
