import { useContext } from "react";
import { MyContext } from "./samplecontext";
import MyComponent from "./mycomponent";

const Class29 = () => {
  const { test, count, setCount, nesto, setNesto } = useContext(MyContext);
  console.log(test);
  return (
    <div>
      {test}
      <MyComponent />
      <button
        style={{ margin: "5px" }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        counter
      </button>
      {count}
      {nesto}
    </div>
  );
};

export default Class29;
