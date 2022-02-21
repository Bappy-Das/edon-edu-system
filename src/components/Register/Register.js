
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Register = () => {


    return (
        <Container className="w-50 my-5">
            <h1 className="text-center">Register</h1>
            <hr />

            <Form>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicCheckbox">
                    <Link to="/login">Already have an account</Link>
                </Form.Group>
                <div className="text-center">
                    <Button className="w-50" variant="primary">
                        Register
                    </Button>
                </div>
            </Form>
        </Container >
    );
};

export default Register;