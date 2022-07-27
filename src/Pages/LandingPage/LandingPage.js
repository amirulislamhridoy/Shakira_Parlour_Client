import React from 'react';
import Banner from './Banner';
import ScreenProfessionally from './ScreenProfessionally';
import Services from './Services';

const LandingPage = () => {
    return (
        <main className=''>
            <Banner />
            <Services />
            <ScreenProfessionally />
        </main>
    );
};

export default LandingPage;