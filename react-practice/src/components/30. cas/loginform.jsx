import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { set } = function isEmailValid(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const onLogin = () => {
    if (isEmailValid(email)) {
      const loginUser = async () => {
        try {
          const response = await fetch("https://dummyjson.com/users/1");
          const responseData = await response.json();

          setUser(responseData);
          setLoading(false);
        } catch (error) {
          console.log("error");
          setLoading(false);
        }
      };
      loginUser();
    } else {
      alert("Email is not correct");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "200px",
        border: "1px solid black",
      }}
    >
      <h3>Email</h3>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <h3>Password</h3>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
