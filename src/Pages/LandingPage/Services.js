import { useQuery } from '@tanstack/react-query';
import React  from 'react';
import SingleService from './SingleService';
import Loading from '../../Shared/Loading/Loading'

const Services = () => {
    const { isLoading, error, data : services } = useQuery(['service'], () =>
    fetch(`http://localhost:5000/service`).then(res =>
      res.json()
    )
  )
  if(isLoading){
    return <Loading />
  }
  
    return (
        <section className='max-w-7xl mx-auto'>
            <h2 className='text-4xl font-bold text-center mt-20 mb-12'>Our Awesome <span className='text-primary'>Services</span></h2>
            <div className='flex justify-between flex-wrap'>
                {services?.map(service => <SingleService service={service} key={service._id}></SingleService>)}
            </div>
            <div className='mt-3 mb-10 text-center'>
                <button className='btn btn-primary text-white'>Explore more</button>
            </div>
        </section>
    );
};

export default Services;