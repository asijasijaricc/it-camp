import { useState } from "react";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Layout from "./layout";
import Product from "./product";

const Class18 = () => {
  const [page, setPage] = useState(0);
  const url = window.location.pathnameh;
  return (
    <div>
      <Layout setPage={setPage}>
        {url === "/home" && <Home />}
        {url === "/product" && <Product />}
        {url === "/contact" && <Contact />}
        {url === "/about" && <About />}
      </Layout>
    </div>
  );
};

export default Class18;
