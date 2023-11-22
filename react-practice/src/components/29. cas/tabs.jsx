import { createContext, useState } from "react";

export const TabsContext = createContext({});

const Tabs = (props) => {
  const [active, SetActive] = useState(0);

  return (
    <TabsContext.Provider value={{ active, SetActive }}>
      <div style={{ display: "flex", gap: "10px" }}>{props.children}</div>
    </TabsContext.Provider>
  );
};

export default Tabs;
