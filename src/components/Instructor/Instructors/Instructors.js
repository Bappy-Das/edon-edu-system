import React, { useEffect } from 'react';
import './Instructors.css';

const Instructors = () => {
    const [Courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://serene-mountain-32822.herokuapp.com/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Instructors;