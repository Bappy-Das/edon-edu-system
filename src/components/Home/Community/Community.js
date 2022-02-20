
import { Button, Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import community from '../../../photos/community.png';

const Community =()=>{
    return (<Container className="mb-2">
    
        <Row>
            <Col className="col-md-3 col-12">
                <img className="" src={community}/>
            </Col>
            <Col className="col-md-7 col-12">
                <div className="text-center p-5">
                    <h1 className="fw-bold">Join Our Community</h1>
                    <h6 className="text-secondary">Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus.</h6>
                    <div>
                    <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Email Address"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <Button className="p-2" variant="outline-success" id="button-addon2">
                    Subscribe
                    </Button>
                </InputGroup>

                    </div>
                </div>
            </Col>
        </Row>
    
    
    </Container>);
}

export default Community;