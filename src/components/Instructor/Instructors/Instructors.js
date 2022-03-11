import React, { useEffect, useState } from 'react';
import Instructor from '../Instructor/Instructor';
import './Instructors.css';

const Instructors = () => {
    const [Instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('https://serene-mountain-32822.herokuapp.com/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data));
    }, [])
    return (
        <div>
            <h1 className='instructor-title-name text-center mb-5'>These Are Our Instructors</h1>
            <div className="container">
                <div className="course-hp-container">
                    {
                        Instructors.map(instructor => <Instructor
                            key={instructor._id}
                            instructor={instructor}
                        ></Instructor>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructors;