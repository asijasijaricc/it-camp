import { Navigate } from "react-router-dom";

function Register() {
  return <div>Register</div>;
  const handleRegister = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: "Muhammad",
          lastName: "Ovi",
          age: 250,
        }),
      });
      const data = await response.json();
      
      Navigate("/login");

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="email" />
      <input type="password" placeholder="password" />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
