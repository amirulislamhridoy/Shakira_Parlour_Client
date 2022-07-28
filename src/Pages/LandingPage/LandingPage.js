import React from 'react';
import Banner from './Banner';
import ScreenProfessionally from './ScreenProfessionally';
import Services from './Services';
import HandleProject from './HandleProject'
import Footer from '../../Shared/Footer/Footer';
import Testimonial from './Testimonial';

const LandingPage = () => {
    return (
        <main className=''>
            <Banner />
            <Services />
            <ScreenProfessionally />
            <Testimonial />
            <HandleProject />
            <Footer />
        </main>
    );
};

export default LandingPage;