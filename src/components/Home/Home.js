import React from 'react';

import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import Banefits from './Banefits/Banefits';
import Banner from './Banner/Banner';
import ExploreCategory from './ExploreCategory/ExploreCategory';
import Achievements from './Achievements/Achievements';
import LifeTimeAccess from './LifeTimeAccess/LifeTimeAccess';
import OurInstructor from './OurInstructor/OurInstructor';
import Community from './Community/Community';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Banner />
            <Banefits />
            <ExploreCategory />
            <Achievements />
            <LifeTimeAccess />
            <OurInstructor />
            <Community />
            <Footer />
        </div>
    );
};

export default Home;