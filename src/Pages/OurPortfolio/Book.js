import React from "react";
import Card from "../../icons/credit-card 1.png";
import paypal from "../../icons/image 17.png";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const Book = () => {
  const stripePromise = loadStripe(
    "pk_test_51L3yxyGxDf7DYIvzB2dADBrYRLv1V6ynAao5VILfSswUx6XUNts49HImSyLVwIBcx9HPvXz17bEpK5EVFNhIOcYl00TB8aBnAO"
  );
  return (
    <section className="mt-10 mx-10">
      <input
        type="text"
        placeholder="Name"
        id="serviceTitle"
        className="input rounded-none w-7/12 my-1"
      />
      <input
        type="email"
        placeholder="jon@gmail.com"
        id="serviceTitle"
        className="input rounded-none w-7/12 my-1"
      />
      <br />
      <select className="input rounded-none w-7/12 my-1">
        <option value="Anti Age Face Treatment">Anti Age Face Treatment</option>
      </select>
      <br />
      <br />
      <span>Pay with</span>
      <br />
      <div className="flex">
        <input className="mr-1" type="radio" />
        <label className="flex">
          <img className="w-5 mr-1" src={Card} alt="" />
          Creadit Card
        </label>
        <input className="mr-1 ml-8" type="radio" />
        <label className="flex">
          <img className="w-5 mr-1" src={paypal} alt="" />
          Paypal
        </label>
      </div>
      <div className='mt-5'>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </section>
  );
};

export default Book;
