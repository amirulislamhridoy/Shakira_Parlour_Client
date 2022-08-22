import React, { useState } from "react";
import { toast } from "react-toastify";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/makeAdmin`, {
      method: "PATCH",
      body: JSON.stringify({email}),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if(json?.modifiedCount){
          toast.success('You are set a Admin.')
          e.target.reset()
        }else{
          if(json.matchedCount === 1){
            toast.error('Sorry this email is already Admin.')
          }else{
            toast.error('Sorry this email is not a user.')
          }
        }
      });
  };
  return (
    <section>
      <form onSubmit={formSubmit}>
        <div className="card m-10 min-h-[250px] bg-base-100 shadow-xl">
          <div className="card-body">
            <label className="font-bold text-xl" htmlFor="email">
              Email
            </label>
            <div className="">
              <input
                type="email"
                placeholder="jon@gmail.com"
                id="email"
                onBlur={(e) => setEmail(e.target.value)}
                className="input input-bordered lg:w-7/12 md:w-10/12 w-full mr-2"
              />
              <input
                className="btn btn-primary text-white px-7 lg:mt-0 mt-2"
                type="submit"
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default MakeAdmin;
