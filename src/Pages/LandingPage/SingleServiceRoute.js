import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../Shared/Header/Header";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";

const SingleServiceRoute = ({ date, setDate }) => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  if(!date){
    date = new Date();
  }
  let footer = format(date, "PP");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/service/${id}`)
      .then((res) => {
        setService(res.data);
      })
      .catch((err) => {
        if (err.response.status === 403 || err.response.status === 401) {
          toast.error(err.response.data.message);
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
      });
  }, []);

  const booking = (service) => {
    const booking = {
      serviceName: service.name,
      taka: service.taka,
      img: service.img,
      name: user?.displayName,
      email: user?.email,
      description: service?.description,
      payment: "pay",
      date: footer,
    };
    fetch("http://localhost:5000/order", {
      method: "POST",
      body: JSON.stringify(booking),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if(json?.message){
          toast.error(json.message)
        }else{
          toast('Your Booking is success.')
        }
      });
  };
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center mt-5">
        <div className="card shadow-xl w-[320px] sm:w-[355px] p-2 sm:p-5 bg-base-100 mb-5">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          <b>{footer}</b>
        </div>

        <div className="card w-80 sm:w-96 bg-base-100 text-center drop-shadow-xl mt-5">
          <div className="card-body">
            <img className="w-14 mx-auto" src={service?.img} alt="" />
            <h2 className="text-2xl font-semibold text-center">
              {service?.name}
            </h2>
            <p className="text-primary font-medium">${service?.taka}</p>
            <p>{service?.description}</p>
            <button
              onClick={() => booking(service)}
              className="btn btn-primary text-white"
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceRoute;
