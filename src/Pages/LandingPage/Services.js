import React, { useState } from 'react';
import { useEffect } from 'react';
import SingleService from './SingleService';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <section className='max-w-7xl mx-auto'>
            <h2 className='text-4xl font-bold text-center mt-20 mb-16'>Our Awesome <span className='text-primary'>Services</span></h2>
            <div>
            {services.map(service => <SingleService service={service}></SingleService>)}
            </div>
        </section>
    );
};

export default Services;