import { createContext, useState } from "react";

export const MyContext = createContext({});

const SimpleContextProvider = (props) => {
  const [count, setCount] = useState(0);
  const [nesto, setNesto] = useState("nesto");
  return (
    <MyContext.Provider
      value={{ test: "test", count, setCount, nesto, setNesto }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default SimpleContextProvider;
