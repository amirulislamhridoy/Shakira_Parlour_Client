import React from "react";
import {useNavigate} from 'react-router-dom'
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";
import SingleOrder from "./SingleOrder";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";

const OrderList = () => {
  const navigate = useNavigate()
  const { isLoading, error, data } = useQuery(["orders"], () =>
    fetch("http://localhost:5000/order", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    }).then((res) => {
      if (res?.status === 403 || res?.status === 401) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        toast.error(res.statusText);
        navigate("/login");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email ID</th>
              <th>Service</th>
              <th>Pay With</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((order) => (
              <SingleOrder order={order} key={order._id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
