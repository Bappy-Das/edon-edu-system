import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { singInUsingGoogle, emailPassLogin, saveUserGoogle, isLoading } = useFirebase()
    const location = useLocation()
    const navigate = useNavigate();
    // const redirect_uri = location.state?.from || '/'

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleSubmit = (event) => {
        emailPassLogin(loginData.email, loginData.password)
            .then((userCredential) => {
                navigate(location.state?.from || '/')

            })
            .catch((error) => {

            })
        event.preventDefault();

    };
    const handleGoogleLogin = () => {
        singInUsingGoogle()
            .then(result => {
                // saveUserGoogle(result.user.email, result.user.displayName)
                navigate(location.state?.from || '/')
                console.log(result.user)
            })
    }


    // const { singInUsingGoogle } = useFirebase()
    // const handleGoogleLogin = () => {
    //     singInUsingGoogle()
    // }


    return (
        <Container className="w-50 my-5">
            <h1 className="text-center">Sign In</h1>
            <hr />
            <div className="text-center" >
                {/* <Button className="mx-2 w-25" variant="outline-primary"><FaFacebookSquare size={35} /></Button> */}
                <Button onClick={handleGoogleLogin} className="w-25" variant="outline-warning"><FcGoogle size={35} /></Button>

            </div>
            <hr className="w-50 mx-auto" />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" onChange={handleOnChange} type="email" placeholder="Enter email" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control onBlur={handleNameChange} type="text" placeholder="Enter User Name" />
                </Form.Group> */}

                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" onChange={handleOnChange} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicCheckbox">
                    <Link to="/register">Create an account</Link>
                </Form.Group>
                <div className="text-center">
                    <Button type="submit" className="w-50" variant="primary">
                        Sign In
                    </Button>
                </div>
            </Form>

        </Container>
    );
};

export default Login;