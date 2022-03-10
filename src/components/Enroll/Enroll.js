import React, { useEffect, useState } from 'react';
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
            <h1 className="pt-5 text-center header-style">
                {details?.courseName}
            </h1>
            <div className="row">
                <div className="col-12 col-md-7">
                    <h4>Description</h4>
                    <p>{details?.description}</p>
                    <br />
                    <h4>Requirements</h4>
                    <p>{details?.requirments}</p>
                    <br />
                    <h4>What you'll learn</h4>
                    <p>{details?.whylearn}</p>
                </div>
                <div className="col-12 col-md-5">
                    <img src={details?.image} alt="" />
                    <h1>$ {details?.price}</h1>
                    <p>This course includes:
                        <br />
                        2 hours on-demand video
                        <br />
                        1 articles
                        <br />
                        Full lifetime access
                        <br />
                        Access on mobile and TV
                        <br />
                        Certificate of completion
                        <br />
                        Language: English <br />
                        Course Level: Intermediate</p>
                        <button className=" btn-course">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Enroll;