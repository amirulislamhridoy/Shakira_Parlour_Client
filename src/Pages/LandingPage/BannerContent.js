import React from 'react';
import bannerImg from '../../images/banner.jpg'

const BannerContent = () => {
    return (
        <div className='lg:flex items-center lg:pt-8 pt-0 pb-10 lg:px-2 px-5'>
            <div className='flex-1 lg:mb-0 mb-5'>
                <h1 className='text-5xl font-bold leading-tight'>BEAUTY SALON <br /> FOR EVERY WOMEN</h1>
                <p className='text-base mt-6 mb-8 max-w-[400px]'>Our salon service is very good. Because our employees are very experienced. They can finish work smoothly.</p>
                <button className='btn btn-primary'>Get an Appointment</button>
            </div>
            <div className=''>
                <img className='mx-auto max-w-[484px] max-h-[478px] rounded-xl' src={bannerImg} alt="Girl Photo" />
            </div>
        </div>
    );
};

export default BannerContent;