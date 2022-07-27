import React from "react";
import screenImg from '../../images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const ScreenProfessionally = () => {
  return (
    <div className='bg-secondary'>
      <div className='max-w-7xl mx-auto flex lg:flex-nowrap flex-wrap lg:py-24 py-16'>
        <img className='lg:max-w-[580px] lg:max-h-[381px] px-5' src={screenImg} alt="Screen Cleaning" />
        <aside className='lg:ml-20 ml-5 flex flex-col justify-between mt-10'>
          <div>
            <h1 className=" text-4xl font-medium">
              Let us handle your screen <span className='text-primary'>Professionally</span>.
            </h1>
            <p className='mt-8 max-w-[500px]'>
              You can clean your screen by us. We are professional about this.
              We can do better than others. We are sure if you believe us you
              will be happy with our work.
            </p>
          </div>
          <div className='flex'>
            <div className='flex-1'>
                <span className='text-4xl font-bold text-primary'>500+</span>
                <br />
                <br />
                <span>Happy Customer</span>
            </div>
            <div className='flex-1'>
                <span className='text-4xl font-bold text-primary'>16+</span>
                <br />
                <br />
                <span>Total Service</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ScreenProfessionally;
