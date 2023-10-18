import { useState } from "react";

const Acordion = () => {
  const [active, setActive] = useState();
  return (
    <div>
      <p
        onClick={() => {
          if (active === 1) {
            setActive(0);
          } else {
            setActive(1);
          }
        }}
      >
        Acordion #1
      </p>
      {active === 1 && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          consectetur!
        </p>
      )}
      <p
        onClick={() => {
          if (active === 2) {
            setActive(0);
          } else {
            setActive(2);
          }
        }}
      >
        Acordion #2
      </p>
      {active === 2 && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          consectetur!
        </p>
      )}
    </div>
  );
};

export default Acordion;
