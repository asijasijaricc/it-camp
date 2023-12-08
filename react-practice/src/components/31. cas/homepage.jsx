import { useContext } from "react";
import { UserContext } from "./contextprovider";

const HomePage = () => {
  const { user, setUser } = useContext(UserContext);
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
          backgroundColor: "#bae8e8",
          width: "400px",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
        }}
      >
        <h1 style={{ color: "#24527a" }}>Welcome to home page !!!</h1>
      </div>
      <div>
        <h3>Username</h3>
        <p>{user?.username}</p>
        <h3>Name</h3>
        <p>{user?.firstName}</p>
        <h3>Lastname</h3>
        <p>{user?.lastName}</p>
        <h3>Phone</h3>
        <p>{user?.phone}</p>
        <h3>Email</h3>
        <p>{user?.email}</p>
        <button
          onClick={() => {
            setUser(undefined);
            localStorage.removeItem("token");
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default HomePage;
