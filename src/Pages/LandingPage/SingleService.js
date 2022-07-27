import React from "react";

const SingleService = ({service}) => {
    const {img, name, description, taka} = service
  return (
    <div class="card w-96 bg-base-100 text-center">
      <div class="card-body">
        <img src={img} alt='' />
        <h2 class="text-2xl font-semibold text-center">{name}</h2>
        <p className='text-primary font-medium'>${taka}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleService;
