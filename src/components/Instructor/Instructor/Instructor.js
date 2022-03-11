import React from 'react';
import { Link } from 'react-router-dom';
import './Instructor.css';


const Instructor = ({ instructor }) => {
    const { _id, instructorDesignation, picture, instructorName } = instructor;
    return (
        <div className="pb-3 bg-pd-color">
            <img className="instructors-img" src={picture} alt="" />      
            <Link to={`/instructorProfile/${_id}`}>
            <h3 className="p-2 course-name">{instructorName}</h3>
                </Link>
            <p>{instructorDesignation}</p>
        </div>
    );
};

export default Instructor;