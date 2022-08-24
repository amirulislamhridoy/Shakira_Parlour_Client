import React from "react";
import {useNavigate} from 'react-router-dom'

const SingleService = ({service}) => {
  const navigate = useNavigate()
    const {img, name, description, taka, _id} = service
  return (
    <div className="card w-96 bg-base-100 text-center hover:drop-shadow-xl mx-auto my-2.5 cursor-pointer">
      <div className="card-body">
        <img className='w-14 mx-auto' src={img} alt='' />
        <h2 className="text-2xl font-semibold text-center">{name}</h2>
        <p className='text-primary font-medium'>${taka}</p>
        <p>{description}</p>
        <button onClick={() => navigate(`/service/${_id}`)} className='btn btn-primary'>You want to Book</button>
      </div>
    </div>
  );
};

export default SingleService;