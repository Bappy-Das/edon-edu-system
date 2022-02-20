import { Button, Col, Container, Row } from 'react-bootstrap';
import './LifeTimeAcess.css';
import picture from '../../../photos/lifeTime.png';
const LifeTimeAccess =()=>{
    return (<Container className='lifeTime mt-5'>
        <Row>
            <Col className='col-md-8 col-12 d-flex justify-content-around align-items-center p-5'>
              <div>
              <h2 className='text-white'>Learn At Your Own Pace, With Lifetime Access Anywhere And Any Device</h2>
              </div>
            </Col>
            <Col className='col-md-4 col-16'>
                <div className='d-flex justify-content-around align-items-center'>
                <Button className='text-white' variant="outline-dark">Get Started</Button>
                <img className='picture' src={picture} style={{width:'50%', height:'100%'}} />
                </div>
            </Col>
        </Row>

    </Container>
    
    );
}

export default LifeTimeAccess;
