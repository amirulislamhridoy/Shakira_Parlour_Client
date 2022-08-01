import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../Shared/Header/Header";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const SingleServiceRoute = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const navigate = useNavigate();

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
      name: service.name,
      taka: service.taka,
      img: service.img,
      description: service.description
    }
    fetch("http://localhost:5000/order", {
      method: "POST",
      body: JSON.stringify(booking),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((json) => toast('Your Booking is success.'));
  };
  return (
    <div>
      <Header />
      <div className="card w-96 bg-base-100 text-center drop-shadow-xl mx-auto my-2.5 mt-10">
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
  );
};

export default SingleServiceRoute;
