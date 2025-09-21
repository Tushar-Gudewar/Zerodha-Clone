import React from 'react';

import HeroSection from './HeroSection';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import OpenAcc from '../OpenAcc';
function HomePage() {
    return (
        <>
            <HeroSection />
            <Awards />
            <Stats />
            <Pricing />
            <OpenAcc />
        </>
     );
}

export default HomePage;