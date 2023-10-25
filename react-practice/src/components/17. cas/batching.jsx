import { useState } from "react";
import Updates from "./updates";

const Batching = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  //   const updateCount2 = () => {
  //     setCount((oldState) => oldState + 1);
  //     setCount((oldState) => oldState + 1);
  //     setCount((oldState) => oldState + 1);
  //   };

  const updateCount3 = () => {
    setCount(count + 1);
    setCount2(count2 + 1);
  };

  console.log("update");

  return (
    <div>
      <p>{count}</p>
      <button onClick={updateCount3}>click</button>
      {count % 2 === 0 ? <Updates test={count} updateTast={setCount} /> : null}
    </div>
  );
};

export default Batching;
