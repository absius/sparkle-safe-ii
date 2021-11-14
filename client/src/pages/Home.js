import React, { useState } from "react";
import JewelryList from "../components/JewelryList";

const Home = () => {
  return (
    <div className="container">
      <JewelryList JewelryList={JewelryList} />
    </div>
  );
};

export default Home;
