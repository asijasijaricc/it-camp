import { useState } from "react";
import NewComponent from "./newcomponent";
import Find from "./find";

const Class35 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <NewComponent count={count} />
      <Find />
    </div>
  );
};

export default Class35;
