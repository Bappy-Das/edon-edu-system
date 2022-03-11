import { Button } from 'bootstrap';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './Contact.css'
import { GrLocation, GrPhone, GrMailOption } from "react-icons/gr";
import { BiTimeFive } from "react-icons/bi";


const ContactUs = () => {
    return (
        <div>
            <Container className="w-75 my-5">
                <h1 className="text-center fw-bold p-5">Ready to Get Started?</h1>
                <hr />

                <Form>
                    <Row>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Jhon Due" />
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="jhon@gmail.com" />
                        </Form.Group>
                    </Row>
                    <Row>

                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control name="phone" type="text" placeholder="01700000000" />
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                            <Form.Label>Subect</Form.Label>
                            <Form.Control name="subJect" type="text" placeholder="" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                    </Row>



                    <div className="text-center">
                        <button className=" btn-contact">Send Massage</button>
                    </div>

                </Form>



            </Container >
            <Container className="w-100 my-5">
                <Row className='p-5' >
                    <Col xs={12} md={3} className="d-flex">
                        <div className='p-3'>
                            <GrLocation size={30} />
                        </div>
                        <div>
                            <h5>Our Address</h5>
                            <h6> 07 Boroughbridge Road BISLEY GL6 5PA, USA </h6>
                        </div>
                    </Col>
                    <Col xs={12} md={3} className="d-flex">
                        <div className='p-3'>
                            <GrPhone size={30} />
                        </div>
                        <div>
                            <h5>Contact</h5>
                            <h6>+1(135) 1984 2020 </h6>
                            <h6>+1(135) 1984 2020 </h6>
                        </div>
                    </Col>
                    <Col xs={12} md={3} className="d-flex">
                        <div className='p-3'>
                            <GrMailOption size={30} />
                        </div>
                        <div>
                            <h5>Email</h5>
                            <h6> hello@edon.com</h6>
                            <h6> info@edon.com</h6>
                        </div>
                    </Col>
                    <Col xs={12} md={3} className="d-flex ab">
                        <div className='p-3'>
                            <BiTimeFive size={30} />
                        </div>
                        <div>
                            <h5>Hours of Operation</h5>
                            <h6>(8 AM - 7 PM, Monday - Friday)</h6>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default ContactUs;