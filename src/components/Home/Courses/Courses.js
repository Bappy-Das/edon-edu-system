import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const [Courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className="container">
            <div className='course-bottom-section'>
                <h1 className="text-pd-color pb-5">Popular Courses</h1>
                <p><Link to={`#`}>
                    <button className="course-main-btn">View All Courses</button>
                </Link></p>
            </div>
            <div className="course-hp-container">
                {
                    Courses.map(course => <Course
                        key={course._id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;