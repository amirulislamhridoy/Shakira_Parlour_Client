import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

const ManageServices = () => {
  const { isLoading, error, data } = useQuery(["repoData"], () =>
    fetch("http://localhost:5000/manageServices").then((res) => res.json())
  );
  if(isLoading){
    return <Loading />
  }

  return (
    <section>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Service Name</th>
              <th>Taka</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {data.map((service, index) => (
              <tr key={service._id}>
                <th>{index + 1}</th>
                <td>{service.name}</td>
                <td>{service.taka}</td>
                <td className='p-0'>
                  <div className="avatar">
                    <div className="w-24 mask mask-hexagon">
                      <img src={service.img} alt='' />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageServices;
