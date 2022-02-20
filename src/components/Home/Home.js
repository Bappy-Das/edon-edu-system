import React from 'react';

import Banefits from './Banefits/Banefits';
import Banner from './Banner/Banner';
import ExploreCategory from './ExploreCategory/ExploreCategory';
import Achievements from './Achievements/Achievements';
import LifeTimeAccess from './LifeTimeAccess/LifeTimeAccess';
import OurInstructor from './OurInstructor/OurInstructor';
import Community from './Community/Community';

const Home = () => {
    return (
        <div>
            <Banner />
            <Banefits />
            <ExploreCategory />
            <Achievements />
            <LifeTimeAccess />
            <OurInstructor />
            <Community />

        </div>
    );
};

export default Home;