import { Button } from 'bootstrap';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './Contact.css'
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
            <Container>
                <Row className='p-5' >
                    <Col xs={12} md={3}>
                        <h4>Our Address</h4>
                        <h5> 07 Boroughbridge Road BISLEY GL6 5PA, USA </h5>
                    </Col>
                    <Col xs={12} md={3}>
                        <h4>Our Address</h4>
                        <h5> 07 Boroughbridge Road BISLEY GL6 5PA, USA </h5>
                    </Col>
                    <Col xs={12} md={3}>
                        <h4>Our Address</h4>
                        <h5> 07 Boroughbridge Road BISLEY GL6 5PA, USA </h5>
                    </Col>
                    <Col xs={12} md={3}>
                        <h4>Our Address</h4>
                        <h5> 07 Boroughbridge Road BISLEY GL6 5PA, USA </h5>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default ContactUs;