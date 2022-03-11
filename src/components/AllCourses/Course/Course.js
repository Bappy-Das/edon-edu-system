import React from 'react';
import './Course.css';
import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

const Course = ({ course }) => {
    const { _id, hours, students, by, image, courseName } = course;
    return (
        <div className="pb-3 bg-pd-color course-class">
            <img className="course-img" src={image} alt="" />
            <div className=''>
                <Link to={`/enroll/${_id}`}>
                    <h3 className="p-2 course-name">{courseName}</h3>
                </Link>
            </div>
            <div className='course-bottom-section'>
                <p>{hours} hour</p>
                <p>{students} Students</p>
            </div>
            <hr className='hr' />
            <div className='course-bottom-section'>
                <Link to={`/booking/${_id}`}>
                    <button className=" btn-course-instructor">By: {by}</button>
                </Link>
                <Link to={`/enroll/${_id}`}>
                    <button className=" btn-course">Add to Cart</button>
                </Link>
            </div>
        </div>
    );
};

export default Course;