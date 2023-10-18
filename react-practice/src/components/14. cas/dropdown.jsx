import { useState } from "react";

const DropDown = () => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <p
        onClick={() => {
          if (active === 1) {
            setActive(0);
          } else {
            setActive(1);
          }
        }}
      >
        Click me{" "}
      </p>
      {active === 1 && (
        <div>
          <p>1st menu item</p>
          <p>2nd menu item</p>
          <p>3rd menu item</p>
        </div>
      )}
    </div>
  );
};

export default DropDown;
