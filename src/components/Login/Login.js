import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <Container className="w-50 my-5">
            <h1 className="text-center">Sign In</h1>
            <hr />
            <div className="text-center" >
                <Button className="mx-2 w-25" variant="outline-primary"><FaFacebookSquare size={35} /></Button>
                <Button className="w-25" variant="outline-warning"><FcGoogle size={35} /></Button>

            </div>
            <hr className="w-50 mx-auto" />
            <Form>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control onBlur={handleNameChange} type="text" placeholder="Enter User Name" />
                </Form.Group> */}

                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicCheckbox">
                    <Link to="/register">Create an account</Link>
                </Form.Group>
                <div className="text-center">
                    <Button className="w-50" variant="primary">
                        Sign In
                    </Button>
                </div>
            </Form>

        </Container>
    );
};

export default Login;