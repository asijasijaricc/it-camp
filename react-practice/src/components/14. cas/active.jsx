import { useState } from "react";

const Active = () => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <p
        style={{ background: active === 1 ? "red" : "white" }}
        onClick={() => {
          if (active === 1) {
            setActive(0);
          } else {
            setActive(1);
          }
        }}
      >
        red
      </p>
      <p
        tyle={{ background: active === 2 ? "green" : "white" }}
        onClick={() => {
          if (active === 2) {
            setActive(0);
          } else {
            setActive(2);
          }
        }}
      >
        green
      </p>
      <p
        style={{ background: active === 3 ? "blue" : "white" }}
        onClick={() => {
          if (active === 3) {
            setActive(0);
          } else {
            setActive(3);
          }
        }}
      >
        blue
      </p>
      <p
        style={{ background: active === 4 ? "violet" : "white" }}
        onClick={() => {
          if (active === 4) {
            setActive(0);
          } else {
            setActive(4);
          }
        }}
      >
        violet
      </p>
    </div>
  );
};

export default Active;
