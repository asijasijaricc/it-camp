import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function isEmailValid(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return emailRegex.test(email);
  }

  const handleLogin = async () => {
    let valid = true;

    if (!isEmailValid(email)) {
      setEmailError("email is very very wrong");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 8) {
      setPasswordError("password wrong");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      // nest
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "300px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "270px",
          height: "400px",
          border: "none",
          backgroundColor: "#bae8e8",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ color: "#24527a" }}>Login now !!</h1>
        <h3 style={{ color: "#5dacbd" }}>Email</h3>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        <h3 style={{ color: "#5dacbd" }}>Password</h3>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        <button
          style={{
            marginTop: "25px",
            width: "120px",
            height: "23px",
            backgroundColor: "#e3f6f5",
            borderColor: "#e3f6f5",
            borderRadius: "7px",
            color: "#24527a",
          }}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
