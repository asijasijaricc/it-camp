import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./login";
import HomePage from "./homepage";
import Register from "./register";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);

const Class31 = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Class31;
