import React, { useEffect, useState } from 'react';
import './Enroll.css';
import { useParams } from 'react-router-dom';

const Enroll = () => {
    const { courseId } = useParams();
    const [details, setDetails] = useState([]);
    console.log(details)
    useEffect(() => {
        fetch('https://serene-mountain-32822.herokuapp.com/courses')
            .then(res => res.json())
            .then(data => {
                const book = data.find(td => td._id === courseId);
                setDetails(book)

            });

    }, [courseId, details])

    return (
        <div className='container'>
            <h1 className="pt-5 pb-5 header-style">
                {details?.courseName}
            </h1>
            <div className="row">
                <div className="col-12 col-md-8">
                    <h3 className='course-details-title'>Description</h3>
                    <p className='course-details-paragraph course-details'>{details?.description}</p>
                    <br />
                    <h3 className='course-details-title'>Requirements</h3>
                    <p className='course-details-paragraph course-details'>{details?.requirments}</p>
                    <br />
                    <h3 className='course-details-title'>What you'll learn</h3>
                    <p className='course-details-paragraph course-details'>{details?.whylearn}</p>
                </div>
                <div className="col-12 col-md-4 enroll-bg">
                    <img className='enroll-img' src={details?.image} alt="" />
                    <div className='container'>
                        <h2 className='enroll-price'>$ {details?.price}</h2>
                        <p className='course-includes'>This course includes:</p>
                        <ul className='course-li'>
                        <li>1.5 hours on-demand video</li>
                        <li>1 article</li>
                        <li>6 downloadable resources</li>
                        <li>1 practice test</li>
                        <li>Full lifetime access</li>
                        <li>Access on mobile and TV</li>
                        <li>Assignments</li>
                        <li>Certificate of completion</li>
                        <li>NASBA CPE credits: 2.4</li>
                    </ul>
                        <button className=" mt-4 btn-enroll">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enroll;