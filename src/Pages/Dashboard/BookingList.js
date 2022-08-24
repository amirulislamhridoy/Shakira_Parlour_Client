import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import {useNavigate} from "react-router-dom"

const BookingList = ({date, setDate}) => {
  const [user, loading] = useAuthState(auth);
  if(!date){
    date = new Date();
  }
  let footer = format(date, "PP");
  const navigate = useNavigate()
  const { isLoading, error, data } = useQuery(["bookingList", date], async () =>
    await fetch(`http://localhost:5000/bookingList?email=${user?.email}&date=${footer}`).then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className='sm:pt-10 sm:px-7'>
      <div className="card shadow-xl w-[320px] sm:w-[355px] p-2 sm:p-5 bg-base-100 mb-5 mt-2">
        <DayPicker mode="single" selected={date} onSelect={setDate} />
        <b>{footer}</b>
      </div>

      <div className="flex gap-5 flex-wrap">
        {data.map((book) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={book._id}>
            <div className="card-body">
              <div className="flex justify-between items-center">
                <img className="w-14" src={book.img} alt="" />
                {<button onClick={() => navigate('/dashboard')} className="btn btn-sm">{book.payment}</button>}
              </div>
              <h2 className="card-title mt-2">{book.name}</h2>
              <p>{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookingList;
