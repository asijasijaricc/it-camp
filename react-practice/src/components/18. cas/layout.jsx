import styles from "./layout.css";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="prop">{children}</div>
    </div>
  );
};

export default Layout;
