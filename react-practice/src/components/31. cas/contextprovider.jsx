import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

const UserContextProvider = (props) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("https://dummyjson.com/auth/users/1", {
          method: "GET" /* or POST/PUT/PATCH/DELETE */,
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        if (data.message === "Invalid/Expired Token!") {
          navigate("/login");
          throw new Error();
        }

        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (!user) {
      fetchUser();
    }
  }, []);

  if (!user) {
    return (
      <div>
        <p>not authorized</p>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Go to login page
        </button>
      </div>
    );
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
