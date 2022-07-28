import React from 'react';
import Banner from './Banner';
import ScreenProfessionally from './ScreenProfessionally';
import Services from './Services';
import HandleProject from './HandleProject'
import Footer from '../../Shared/Footer/Footer';

const LandingPage = () => {
    return (
        <main className=''>
            <Banner />
            <Services />
            <ScreenProfessionally />
            <HandleProject />
            <Footer />
        </main>
    );
};

export default LandingPage;