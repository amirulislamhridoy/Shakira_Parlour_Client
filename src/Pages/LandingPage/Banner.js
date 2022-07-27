import React from 'react';
import Header from '../../Shared/Header/Header';
import BannerContent from './BannerContent';

const Banner = () => {
    return (
        <section className="bg-secondary lg:pt-8 pt-0">
            <div className='max-w-7xl mx-auto'>
                <Header />
                <BannerContent />
            </div>
        </section>
    );
};

export default Banner;