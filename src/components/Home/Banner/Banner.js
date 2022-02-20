import React from 'react';
import { Col, Row } from 'react-bootstrap';
import bannerimg from '../../../photos/banner-img.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner-head'>
            <Row>
                <Col>
                    <div className='bannar-content d-flex align-items-center p-4 mt-5'>
                        <div className='mt-5'>
                            <span className='top-title'>FOR A BETTER FUTURE</span>
                            <h1 className='banner-title'>We Have All Kinds Of <span className='primary-color'>Courses</span> Collection</h1>
                            <p className='banner-footer'>The experience of our instructors benefits your career</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img className='img-fluid' src={bannerimg} alt="" srcset="" />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Banner;