import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import learning from '../../../photos/learning.png'
import source from '../../../photos/source.png'
import efficency from '../../../photos/out-line.png'
import './Banefits.css'

const Banefits = () => {
    return (
        <div className='my-5'>
            <Container>
                <Row>
                    <Col>
                        <div className='d-flex align-items-center justify-content-evenly'>
                            <img className='img-fluid' src={learning} alt="" srcset="" />

                            <div className='ms-4'>
                                <h3 className='benefit-title'>Expedite Learning</h3>
                                <p className='benefit-content'>Adopting fast learning techniques by real-world experts</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='d-flex align-items-center justify-content-evenly'>
                            <img className='img-fluid' src={source} alt="" srcset="" />

                            <div className='ms-4'>
                                <h3 className='benefit-title'>Open-source Platform</h3>
                                <p className='benefit-content'>The world's learning open-source platform that helps your career</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='d-flex align-items-center justify-content-evenly'>
                            <img className='img-fluid' src={efficency} alt="" srcset="" />

                            <div className='ms-4'>
                                <h3 className='benefit-title'>Maximum Efficiency</h3>
                                <p className='benefit-content'>Learning from the course has the potential to achieve maximum efficiency</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banefits;