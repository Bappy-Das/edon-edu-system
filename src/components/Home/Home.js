import React from 'react';

import Banefits from './Banefits/Banefits';
import Banner from './Banner/Banner';
import ExploreCategory from './ExploreCategory/ExploreCategory';
import Achievements from './Achievements/Achievements';
import LifeTimeAccess from './LifeTimeAccess/LifeTimeAccess';
import OurInstructor from './OurInstructor/OurInstructor';
import Community from './Community/Community';
import PopularCourse from './PopularCourse';
import LatestBlog from '../AllBlog/LatestBlog/LatestBlog';


const Home = () => {
    return (
        <div>
            <Banner />
            <Banefits />
            <ExploreCategory />
            <PopularCourse />
            <Achievements />
            <LifeTimeAccess />
            <OurInstructor />

            <LatestBlog />
            <Community />

        </div>
    );
};

export default Home;