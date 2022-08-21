import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import uploadImg from "../../icons/cloud-upload-outline 1.png";

const AddService = () => {
  const imgAPI = "893909661bf063b7b6747914cb9d81f0";
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const photo = data.image[0];
    let formData = new FormData();
    formData.append("image", photo);
    fetch(`https://api.imgbb.com/1/upload?key=${imgAPI}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((json) => {
        const img = json.data.url;
        if (img) {
          data.image = img;
          fetch("http://localhost:5000/addService", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((json) => {
              if(json.acknowledged){
                toast.success('You are added a service.')
                reset();
              }
            });
        }
      });
  };

  const uploadFn = () => {
    const uploadedImg = document.getElementById("image");
    uploadedImg.click();
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card m-10 mb-2 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="lg:flex justify-between">
              <div className="form-control lg:w-5/12">
                <label className="label" htmlFor="serviceTitle">
                  <span className="label-text font-bold text-xl">
                    Service Title <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter title"
                  id="serviceTitle"
                  className="input input-bordered"
                  {...register("title", { required: true })}
                  required
                />
                {errors.title && (
                  <p className="text-error">Service Title is required</p>
                )}
              </div>
              <div className="form-control lg:w-5/12">
                <label className="label">
                  <span className="label-text font-bold text-xl">
                    Image <span className="text-red-500">*</span>
                  </span>
                </label>

                <div className="relative p-3">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    required
                    placeholder="Upload Image"
                    {...register("image", { required: true })}
                    className="scale-125 translate-x-1/4 cursor-pointer"
                  />
                  <div
                    onClick={uploadFn}
                    className="flex items-center absolute top-0 left-1 bg-base-100 border-2 rounded-xl cursor-pointer"
                  >
                    <img className="w-12" src={uploadImg} alt="" />
                    <b className="pr-3">Upload image</b>
                  </div>
                </div>
                {errors.image && (
                  <p className="text-error">Image is required</p>
                )}
              </div>
            </div>
            <div className="form-control lg:w-5/12">
              <label className="label" htmlFor="description">
                <span className="label-text font-bold text-xl">
                  Description
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <textarea
                required
                type="text"
                id="description"
                placeholder="Enter Description"
                className="input input-bordered h-32"
                {...register("description", {
                  required: true,
                  minLength: {
                    value: 50,
                    message: "Your description will be minium 50 length.",
                  },
                })}
              />
              <p className="text-error">
                {errors.description?.type === "required" &&
                  "Description is required"}
              </p>
              <p className="text-error">{errors.description?.message}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-end">
          <input
            className="cursor-pointer ml-auto mr-10 px-6 btn-sm btn btn-primary text-white"
            type="submit"
          />
        </div>
      </form>
    </section>
  );
};

export default AddService;
