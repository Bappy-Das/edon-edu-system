import React from 'react';
import './Course.css';
import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

const Course = ({ course }) => {
    const { _id, hours, students, by, image, name } = course;
    return (
        <div className="pb-3 bg-pd-color">
            <img className="course-img" src={image} alt="" />
            <h3 className="p-2 course-name">{name}</h3>
            <div className='course-bottom-section'>
                <p>{ hours} hour</p>
                <p>{ students} Students</p>
            </div>
            <hr className='hr' />
            <div className='course-bottom-section'>
                <Link to={`/booking/${_id}`}>
                    <button className=" btn-course-instructor">By: {by}</button>
                </Link>
                <Link to={`/booking/${_id}`}>
                    <button className=" btn-course">Add to Cart</button>
                </Link>
            </div>
        </div>
    );
};

export default Course;