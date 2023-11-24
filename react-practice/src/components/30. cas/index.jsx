import { useContext } from "react";
import { UserContext } from "./contextProvider";

const Class30 = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return <div></div>;
};

export default Class30;
