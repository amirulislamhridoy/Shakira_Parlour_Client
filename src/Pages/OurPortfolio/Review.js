import React from "react";
import { useForm } from "react-hook-form";

const Review = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="m-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input input-bordered rounded-none w-7/12 my-1"
          placeholder="Your Name"
          {...register("name", { required: true })}
        />
        <input
          className="input input-bordered rounded-none w-7/12 my-1"
          placeholder="Company's name, Designation"
          {...register("designation", { required: true })}
        />
        <textarea
          className="input input-bordered rounded-none w-7/12 my-1 h-32"
          placeholder="Description"
          {...register("description", { required: true })}
        />
        <input
          className="input input-bordered rounded-none w-7/12 my-1"
          type="number"
          placeholder="Ratings"
          {...register("ratings", { required: true })}
        />
        <br />
        <input className="btn btn-primary text-white px-10" type="submit" />
      </form>
    </section>
  );
};

export default Review;
