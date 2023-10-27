import styles from "./layout.css";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout = ({ children, setPage }) => {
  return (
    <div>
      <Navbar setPage={setPage} />
      <Sidebar />
      <div className="prop">
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Layout;
