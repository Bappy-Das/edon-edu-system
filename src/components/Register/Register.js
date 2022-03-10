
import { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';



const Register = () => {
    const { register } = useFirebase()
    const [loginData, setLoginData] = useState({});
    const history = useNavigate()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleSubmit = (event) => {
        // console.log(loginData)
        register(loginData.email, loginData.password, loginData.name, loginData.phone)

        event.preventDefault();
        // const data = new FormData(event.currentTarget);
    }

    return (
        <Container className="w-50 my-5">
            <h1 className="text-center">Register</h1>
            <hr />

            <Form onSubmit={handleSubmit}>
                <Row>
                    <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control name="name" onChange={handleOnChange} type="text" placeholder="Jhon Due" />
                    </Form.Group>
                    <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control name="phone" onChange={handleOnChange} type="text" pattern="[0-9]{11}" placeholder="01700000000" />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" onChange={handleOnChange} type="email" placeholder="jhon@gmail.com" />
                    </Form.Group>


                </Row>
                <Row>
                    <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" onChange={handleOnChange} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                        <Form.Label>Re Enter Password</Form.Label>
                        <Form.Control name="password" onChange={handleOnChange} type="password" placeholder="Re Enter Password" />
                    </Form.Group>

                </Row>

                <Form.Group className="mb-3 w-50 mx-auto text-center" controlId="formBasicCheckbox">
                    <Link to="/login">Already have an account</Link>
                </Form.Group>
                <div className="text-center">
                    <Button type='submit' className="w-50" variant="primary">
                        Register
                    </Button>
                </div>
            </Form>
        </Container >
    );
};

export default Register;