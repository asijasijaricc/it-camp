import { makeUpperCase } from "./utils";

const SimpleForm = ({ defaultInput, ButtonTitle, onComplate }) => {
  const complete = (e) => {
    console.log(e.target);
  };

  const onChange = (e) => {
    console.log(makeUpperCase(e.target.value));
  };
  return (
    <div>
      <input defaultValue={defaultInput} />
      <button onClick={onComplate}>{ButtonTitle}</button>
    </div>
  );
};

export default SimpleForm;
