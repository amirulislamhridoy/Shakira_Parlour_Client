import React from "react";
import { useForm } from "react-hook-form";
import uploadImg from '../../icons/cloud-upload-outline 1.png'

const AddService = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // const fn = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.files)
  // }

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card m-10 mb-2 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="lg:flex justify-between">
              <div className="form-control lg:w-5/12">
                <label className="label" htmlFor="serviceTitle">
                  <span className="label-text font-bold text-xl">
                    Service Title
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter title"
                  id="serviceTitle"
                  className="input input-bordered"
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <p className="text-error">Service Title is required</p>
                )}
              </div>
              <div className="form-control lg:w-5/12">
                <label className="label">
                  <span className="label-text font-bold text-xl">Image</span>
                </label>

                <div className='border-2 p-2 rounded-xl relative w-48 overflow-hidden'>
                  <div className='flex items-center '>
                    <img className='w-12' src={uploadImg} alt='' />
                    <b className='ml-1'>Upload image</b>
                  </div>
                  <input
                    type="file"
                    name="file"
                    placeholder="Upload Image"
                    {...register("image", { required: true })}
                    className="absolute scale-[3] top-2 left-0 opacity-0 cursor-pointer"
                  />
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
                </span>
              </label>
              <textarea
                type="text"
                id="description"
                placeholder="Enter Description"
                className="input input-bordered h-32"
                {...register("description", {
                  required: true,
                  minLength: {
                    value: 20,
                    message: "Your description will be minium 20 words.",
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

      {/* <input onChange={fn} type='file'></input> */}
    </section>
  );
};

export default AddService;
