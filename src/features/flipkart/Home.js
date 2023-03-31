import React, { useState } from "react";
import Filter from "./Filter";
import ProductList from "./ProductList";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div style={{ border: "2px solid black", margin: "50px" }}>
      <Filter searchText={searchText} setSearchText={setSearchText} />
      <ProductList searchText={searchText} />
    </div>
  );
};

export default Home;
