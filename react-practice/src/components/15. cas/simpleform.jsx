import { useState } from "react";

const SimpleForm = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    passwoed: "",
  });

  return (
    <div>
      <label htmlFor="">Name</label>
      <br />
      <input type="text" name="name" />
      <br />
      <label htmlFor="">Surname</label>
      <br />
      <input type="text" name="surname" />
      <br />
      <label htmlFor="">Email</label>
      <br />
      <input type="email" name="email" />
      <br />
      <label htmlFor="">Password</label>
      <br />
      <input type="password" name="password" />
    </div>
  );
};

export default SimpleForm;
