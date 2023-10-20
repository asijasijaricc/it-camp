import styles from "./dropdown.css";
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
        Click me
      </p>
      {active === 1 && (
        <div className="neki">
          <p>1st menu item</p>
          <hr />
          <p>2nd menu item</p>
          <hr />
          <p>3rd menu item</p>
        </div>
      )}
      <div className="nesto">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          amet.
        </p>
      </div>
    </div>
  );
};

export default DropDown;
