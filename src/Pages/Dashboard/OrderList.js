import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";
import SingleOrder from "./SingleOrder";

const OrderList = () => {
  const { isLoading, error, data } = useQuery(["orders"], () =>
    fetch("http://localhost:5000/order").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
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
            {data.map(order => <SingleOrder order={order} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
