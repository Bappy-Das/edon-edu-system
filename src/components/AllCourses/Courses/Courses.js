import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const [Courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://serene-mountain-32822.herokuapp.com/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [Courses])
    return (
        <div className="container">
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