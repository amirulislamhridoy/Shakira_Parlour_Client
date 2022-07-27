import React from "react";

const SingleService = ({service}) => {
    const {img, name, description, taka} = service
  return (
    <div class="card w-96 bg-base-100 text-center hover:drop-shadow-xl mx-auto my-2.5">
      <div class="card-body">
        <img className='w-14 mx-auto' src={img} alt='' />
        <h2 class="text-2xl font-semibold text-center">{name}</h2>
        <p className='text-primary font-medium'>${taka}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleService;