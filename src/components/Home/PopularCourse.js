import React from 'react';
import { Link } from 'react-router-dom';
import Courses from '../AllCourses/Courses/Courses';

const PopularCourse = () => {
    return (
        <div className='container'>
            <div className='course-bottom-section'>
                <h1 className="text-pd-color pb-5">Popular Courses</h1>
                <p><Link to="/courses">
                    <button className="course-main-btn">View All Courses</button>
                </Link></p>
            </div>
            <Courses/>
        </div>
    );
};

export default PopularCourse;