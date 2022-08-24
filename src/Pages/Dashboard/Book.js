import React, { useEffect, useState } from "react";
import Card from "../../icons/credit-card 1.png";
import paypal from "../../icons/image 17.png";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";
import { signOut } from "firebase/auth";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const Book = ({date, setDate}) => {
  const [user, loading] = useAuthState(auth);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const [serviceName, setServiceName] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  if(!date){
    date = new Date();
  }
  let footer = format(date, "PP");
  const { isLoading, error, data } = useQuery(["bookedService", date], () =>
    fetch(`http://localhost:5000/willBook?email=${user?.email}&date=${footer}`).then((res) =>
      res.json()
    )
  );

  useEffect(() => {
    fetch(`http://localhost:5000/create-payment-intent?price=${price}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
        return res.json();
      })
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  if (isLoading) {
    return <Loading />;
  }
  const stripePromise = loadStripe(
    "pk_test_51L3yxyGxDf7DYIvzB2dADBrYRLv1V6ynAao5VILfSswUx6XUNts49HImSyLVwIBcx9HPvXz17bEpK5EVFNhIOcYl00TB8aBnAO"
  );
  const changeFn = (serviceName) => {
    setServiceName(serviceName);
    if (serviceName === "Please Select Your Service") {
      setServiceName(null);
    }
    const priceService = data.find(
      (service) => service.serviceName === serviceName
    );
    setPrice(priceService?.taka);
  };
  return (
    <section className="md:mt-10 md:mx-10 lg:flex flex-row-reverse justify-end gap-5">
      <div className="card shadow-xl w-[320px] sm:w-[355px] p-2 sm:p-5 bg-base-100 mb-5">
        <DayPicker mode="single" selected={date} onSelect={setDate} />
        <b>{footer}</b>
      </div>

      <div className='flex-1'>
        <input
          type="text"
          placeholder="Name"
          id="serviceTitle"
          className="input rounded-none w-7/12 lg:w-full my-1"
          value={user?.displayName}
          readOnly
        />
        <input
          type="email"
          placeholder="jon@gmail.com"
          id="serviceTitle"
          className="input rounded-none w-7/12 lg:w-full my-1"
          value={user?.email}
          readOnly
        />
        <br />
        <select
          onChange={(e) => changeFn(e.target.value)}
          className="input rounded-none w-7/12 lg:w-full my-1"
        >
          <option>Please Select Your Service</option>
          {data.map((service) => (
            <option value={service.serviceName} key={service._id}>
              {service.serviceName}
            </option>
          ))}
        </select>
        <br />
        <br />
        <span>Pay with</span>
        <br />
        <div className="flex">
          <input className="mr-1" type="radio" name="payment" />
          <label className="flex">
            <img className="w-5 mr-1" src={Card} alt="" />
            Creadit Card
          </label>
          <input className="mr-1 ml-8" type="radio" name="payment" />
          <label className="flex">
            <img className="w-5 mr-1" src={paypal} alt="" />
            Paypal
          </label>
        </div>
        <div className="mt-5">
          <div className="card w-80 md:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm
                  serviceName={serviceName}
                  clientSecret={clientSecret}
                  customerName={user?.displayName}
                  user={user}
                />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
