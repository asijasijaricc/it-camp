import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./login";
import HomePage from "./homepage";
import UserContextProvider from "./contextprovider";
import Register from "./register";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserContextProvider>
        <HomePage />
      </UserContextProvider>
    ),
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

const Class31 = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
export default Class31;
