import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const BookingList = () => {
  const [user, loading] = useAuthState(auth);
  const { isLoading, error, data } = useQuery(["bookingList"], () =>
    fetch(`http://localhost:5000/bookingList?email=${user?.email}`).then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="pt-10 px-7 flex gap-5 flex-wrap">
      {data.map((book) => (
        <div className="card w-96 bg-base-100 shadow-xl" key={book._id}>
          <div className="card-body">
            <div className='flex justify-between items-center'>
              <img className="w-14" src={book.img} alt="" />
              {<button className='btn btn-sm'>{book.payment}</button>}
            </div>
            <h2 className="card-title mt-2">{book.name}</h2>
            <p>{book.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BookingList;
