import * as React from 'react';
import NavBar from '../NavBar/NavBar';
import FeaturedSection from '../FeaturedSection/FeaturedSection';
import HireVCSection from '../HireVCSection/HireVCSection';

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <FeaturedSection />
            <HireVCSection />
        </div>
    )
}

export default HomePage;