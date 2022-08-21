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

  const uploadFn = () => {
    const uploadedImg = document.getElementById('image')
    uploadedImg.click()
  }

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

                <div className='relative p-3'>
                  <input
                    type="file"
                    name="image"
                    id='image'
                    placeholder="Upload Image"
                    {...register("image", { required: true })}
                    className="scale-125 translate-x-1/4"
                  />
                  <div onClick={uploadFn} className='flex items-center absolute top-0 left-1 bg-base-100 border-2 rounded-xl'>
                    <img className='w-12' src={uploadImg} alt='' />
                    <b className='pr-3'>Upload image</b>
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
    </section>
  );
};

export default AddService;
