import React, { useState } from "react";
import JewelryList from "../components/JewelryList";
import Login from "./Login";
import Auth from "../utils/auth";
import Signup from "./Signup";

const Home = () => {
  if (Auth.loggedIn()) {
    return (
      <div className="container">
        <JewelryList JewelryList={JewelryList} />
      </div>
    );
  } else {
    return (
      <>
        <div className="container">
          <Signup Signup={Signup} />
        </div>
        <div className="container">
          <Login Login={Login} />
        </div>
      </>
    );
  }
};

export default Home;
