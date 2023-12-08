import { memo } from "react";

const NewComponent = () => {
  console.log("simple rerender");
  return (
    <div>
      <p>Simple Component</p>
    </div>
  );
};

export default memo(NewComponent);
