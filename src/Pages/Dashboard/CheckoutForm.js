import React, { useState } from "react";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import axios from "axios";

const CheckoutForm = ({ serviceName, clientSecret, customerName, user }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setErrorMessage(error?.message || "");

    const { paymentIntent, intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: customerName,
          },
        },
      }
    );
    
    if (paymentIntent) {
      const sendData = {
        email: user.email,
        serviceName,
        transactionId: paymentSuccess,
      };
      axios
        .patch(`http://localhost:5000/payment`, sendData)
        .then(function (response) {
          console.log(response);
          toast.success("Your payment is success.");
          setPaymentSuccess(paymentIntent?.id);
          setErrorMessage("");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      toast.error('Your service payment is already paid.')
      setPaymentSuccess("");
      setErrorMessage(paymentIntent?.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        {<p className="text-red-500">{errorMessage}</p>}
        {paymentSuccess && (
          <p className="text-green-500">
            Congratulation you payment is successful. Your transaction id is{" "}
            {paymentSuccess}
          </p>
        )}
        <button
          type="submit"
          className="btn btn-sm"
          disabled={!stripe || !elements || !serviceName}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
