import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";

import footerLogo from '../../../photos/white-logo.png'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-bg p-5'>
            <Container>
                <Row className='my-5'>
                    <Col md={3}>
                        <img src={footerLogo} alt="" srcset="" />
                        <p className='mt-4'> Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Curabitu Nulla porttitor accumsan tincidunt.</p>
                        <div className=''>
                            <FaYoutubeSquare size={40} />
                            <FaFacebookSquare size={40} />
                            <FaTwitterSquare size={40} />
                            <FaLinkedin size={40} />

                        </div>
                    </Col>
                    <Col md={3}>
                        <h3>Popular Courses</h3>

                        <li>Computer Science</li>
                        <li>Web Development</li>
                        <li>Data Science</li>
                        <li>Marketing</li>
                        <li>Photography</li>
                        <li>Business</li>
                    </Col>
                    <Col md={3}>
                        <h3>Company</h3>

                        <li>About Us</li>
                        <li>Courses</li>
                        <li>Instructor</li>
                        <li>Events</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </Col>
                    <Col md={3}>
                        <h3>Contact Info</h3>

                        <li>07 Boroughbridge Road BISLEY GL6 5PA, USA</li>
                        <li>+1(135) 1984 2020</li>
                        <li>hello@edon.com</li>
                        <li>support@edon.com</li>
                        <li>(8 AM - 7 PM, Monday - Friday)</li>

                    </Col>

                </Row>

                <Row>
                    <hr />
                    <p className='text-center'>Copyright &copy; 2021 Edon</p>
                </Row>
            </Container>

        </div>
    );
};

export default Footer;