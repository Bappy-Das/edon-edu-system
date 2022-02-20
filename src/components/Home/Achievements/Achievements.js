import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import achivementMan from '../../../photos/achievements-img.png'
import counterImg from '../../../photos/counter-shape.png'

import './Achivements.css'
const Achievements = () => {
    return (
        <Container className='my-4'>
            <Row>
                <Col >
                    <Row className='achivement'>
                        <Col sm={3} className='p-4' ><img className='img-fluid' src={achivementMan} alt="" srcset="" /></Col>
                        <Col sm={8} className='mt-5 '>
                            <h3 className='font-weight-bold'>Our Achievements</h3>
                            <p>Learn the secrets of life success, all the successes we have achieved in achieving goals.</p>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <img className='img-fluid ' src={counterImg} alt="" srcset="" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        <h3>25,000+</h3>
                        <p>Courses & Videos</p>
                    </div>

                </Col>
                <Col>
                    <div>
                        <h3>125,000+</h3>
                        <p>Students Enrolled</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h3>10,000+</h3>
                        <p>Courses Instructors</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h3>100%</h3>
                        <p>Satisfaction Rate</p>
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default Achievements;