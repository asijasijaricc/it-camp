import Button from "./button";
import Input from "./input";
import SimpleForm from "./simple";

const Class7 = () => {
  const Finish = (e) => {
    console.log(e.target);
  };

  return (
    <div>
      {/* <SimpleForm
        defaultInput="input"
        ButtonTitle="submit"
        onComplate={Finish}
      />
      <Button title="Submit" style={{ border: "1px solid black" }} />
      <Button className="borderBlack" onPress={(e) => console.log(e)} /> */}
      {/* <Button /> */}
      <Input
        type="text"
        className="inp"
        style={{ background: "pink" }}
        OnChangeText={(value) => console.log(value)}
        defaulValue="myinput"
      />
      <Input />
    </div>
  );
};

export default Class7;
