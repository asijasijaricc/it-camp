import { useState } from "react";

const SimpleForm = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    const newError = { ...error };

    if (data.name.length <= 4) {
      newError.name = "Name must be longer then 4 characteres!";
    }
    if (data.surname.length <= 4) {
      newError.surname = "Surname must be longer then 4 characteres!";
    }

    if (!isEmailValid(data.email)) {
      newError.email = "Email must be in email format";
    }

    if (
      data.password.length <= 8 ||
      data.password.toLowerCase() === data.password
    ) {
      newError.password =
        "Password must be longer then 8 charachteres aand have at leaste one upper case";
    }

    if (
      newError.name ||
      newError.surname ||
      newError.email ||
      newError.password
    ) {
      setError({ newError });
    } else {
      // submit to func
      console.log(data);
      setError({ newError });
    }
  };

  function isEmailValid(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          name="surname"
          value={data.surname}
          onChange={(e) => {
            setData({ ...data, surname: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={data.password}
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        />
      </div>
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
};
export default SimpleForm;
