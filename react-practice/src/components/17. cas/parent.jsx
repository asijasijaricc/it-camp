import { useState } from "react";
import Child from "./child";

const Parent = () => {
  const [test, updateT] = useState(0);
  return (
    <div>
      <p style={{ color: test % 5 === 0 ? "green" : "black" }}>perent</p>
      <p>{test}</p>
      <button onClick={() => updateT(test + 1)}>click</button>
      <Child state={test} UpdateS={updateT} />
      <p>Kraj rada</p>
    </div>
  );
};

export default Parent;
