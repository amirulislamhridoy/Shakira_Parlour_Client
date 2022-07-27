import React from 'react';
import Banner from './Banner';
import ScreenProfessionally from './ScreenProfessionally';
import Services from './Services';
import HandleProject from './HandleProject'

const LandingPage = () => {
    return (
        <main className=''>
            <Banner />
            <Services />
            <ScreenProfessionally />
            <HandleProject />
        </main>
    );
};

export default LandingPage;