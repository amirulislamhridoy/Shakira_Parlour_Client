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
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useQuery } from '@tanstack/react-query'
import Loading from '../../Shared/Loading/Loading'

const Book = () => {
  const [user, loading] = useAuthState(auth);
  const { isLoading, error, data } = useQuery(['repoData'], () =>
    fetch('http://localhost:5000/serviceOnly').then(res =>
      res.json()
    )
  )
  if(isLoading){return <Loading />}
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
        value={user?.displayName}
        readOnly
      />
      <input
        type="email"
        placeholder="jon@gmail.com"
        id="serviceTitle"
        className="input rounded-none w-7/12 my-1"
        value={user?.email}
        readOnly
      />
      <br />
      <select className="input rounded-none w-7/12 my-1">
        {data.map(service => <option value={service.name} key={service._id}>{service.name}</option>)}
      </select>
      <br />
      <br />
      <span>Pay with</span>
      <br />
      <div className="flex">
        <input className="mr-1" type="radio" name='payment' />
        <label className="flex">
          <img className="w-5 mr-1" src={Card} alt="" />
          Creadit Card
        </label>
        <input className="mr-1 ml-8" type="radio" name='payment' />
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
