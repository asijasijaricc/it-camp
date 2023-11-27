import { useContext } from "react";
import { UserContext } from "./contextProvider";
import LoginForm from "./loginform";

const Class30 = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <div>
        {user && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              border: "1px solid grey",
              width: "500px",
              borderRadius: "9px",
              padding: "10px",
            }}
          >
            <div>
              <img
                style={{ width: "500px", height: "350px", borderRadius: "7px" }}
                src={user.image}
                alt=""
              />
            </div>
            <h2 style={{ color: "grey" }}>My profile</h2>
            <h3>Username</h3>
            <p>{user.username}</p>
            <h3>Name</h3>
            <p>{user.firstName}</p>
            <h3>Lastname</h3>
            <p>{user.lastName}</p>
            <h3>Phone</h3>
            <p>{user.phone}</p>
            <h3>Email</h3>
            <p>{user.email}</p>
            <button onClick={() => setUser(undefined)}>Log out</button>
          </div>
        )}
        {!user && <LoginForm />}
      </div>
    </div>
  );
};

export default Class30;
