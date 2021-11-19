import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

const GiveUsYourMoney = () => {
  return (
    <>
      <h2>Payment Options</h2>
      <form action="/create-checkout-session" method="POST">
        <button type="submit">Donations</button>
      </form>
      <Elements stripe={stripePromise}></Elements>
    </>
  );
};

export default GiveUsYourMoney;
