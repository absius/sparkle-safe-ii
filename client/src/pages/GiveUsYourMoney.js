import React from "react";
import { Link } from "react-router-dom";
import { PaymentElement } from "@stripe/react-stripe-js";

const GiveUsYourMoney = () => {
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default GiveUsYourMoney;
