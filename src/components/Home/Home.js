import React from 'react';

import Banefits from './Banefits/Banefits';
import Banner from './Banner/Banner';
import ExploreCategory from './ExploreCategory/ExploreCategory';
import Achievements from './Achievements/Achievements';
import LifeTimeAccess from './LifeTimeAccess/LifeTimeAccess';
import OurInstructor from './OurInstructor/OurInstructor';
import Community from './Community/Community';
import Courses from './Courses/Courses';


const Home = () => {
    return (
        <div>
            <Banner />
            <Banefits />
            <ExploreCategory />
            <Courses/>
            <Achievements />
            <LifeTimeAccess />
            <OurInstructor />
            <Community />

        </div>
    );
};

export default Home;