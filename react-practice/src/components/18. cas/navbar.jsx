import styles from "./layout.css";

const Navbar = ({ setPage, children }) => {
  const changeUrl = (path) => {
    const obj = { title: path, url: path };

    window.history.pushState(obj, obj.title, obj.url);
  };
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img
            src="https://www.adobe.com/express/create/logo/media_104b6a549009ec0d7e3d97e311517778f06da073b.jpeg?width=400&format=jpeg&optimize=medium"
            alt=""
          />
        </div>
        <div className="naslov">
          <h1>Tail block</h1>
        </div>
        <div className="linkovi">
          <p
            onClick={() => {
              //   setPage(0);
              changeUrl("home");
            }}
          >
            Home
          </p>
          <p
            onClick={() => {
              //   setPage(2);
              changeUrl("product");
            }}
          >
            Product
          </p>
          <p
            onClick={() => {
              //   setPage(3);
              changeUrl("contact");
            }}
          >
            Contact
          </p>
          <p
            onClick={() => {
              //   setPage(4);
              changeUrl("about");
            }}
          >
            About
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
