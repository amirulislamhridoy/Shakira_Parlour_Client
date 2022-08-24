import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/addReview", data)
      .then(function (response) {
        if (response.data.insertedId) {
          toast.success("Your review is added successfully.");
          reset()
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <section className="m-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input input-bordered rounded-none w-7/12 my-1"
          placeholder="Your Name"
          {...register("name", { required: true })}
          required
        />
        <input
          className="input input-bordered rounded-none w-7/12 my-1"
          placeholder="Company's name, Designation"
          {...register("designation", { required: true })}
          required
        />
        <textarea
          className="input input-bordered rounded-none w-7/12 my-1 h-32"
          placeholder="Description"
          {...register("description", { required: true })}
          required
        />
        <br />
        <select
          className="input input-bordered rounded-none w-7/12 my-1"
          {...register("ratings", { required: true })}
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <input className="btn btn-primary text-white px-10" type="submit" />
      </form>
    </section>
  );
};

export default Review;
