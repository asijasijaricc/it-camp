import { useContext } from "react";
import { TabsContext } from "./tabs";

const TabsItem = (props) => {
  const { title, tabKey } = props;
  const { active, setActive } = useContext(TabsContext);
  return (
    <div
      onClick={() => setActive(tabKey)}
      style={{ border: tabKey === active ? "1px solid black" : "0" }}
    >
      {title}
    </div>
  );
};

export default TabsItem;
