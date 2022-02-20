import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import student1 from '../../../photos/student1.png';
import student2 from '../../../photos/student2.png';
import quat from '../../../photos/quat.png';
const Feedback =()=>{
    return(
        <Container className='mt-3'>
            <h1 className='text-center fw-bold'>What Our Happy Student Say</h1>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <Row>
        <Col className='col-md-4 col-12'>
        <img src={student1} class="w-100" alt="..."/>      
        </Col>
        <Col className='col-md-8 col-12'>
            <div className='p-3'>
            <img src={quat} class="d-block w-25" alt="..."/>
            <h5 className='pt-3'>"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy"</h5>   
            <h6 className='fw-bold  pt-5'>Alex Dew</h6>
            <h6>Student</h6>
            </div>
        </Col>
    </Row>
    </div>
   
    <div class="carousel-item">
    <Row>
        <Col className='col-md-4 col-12'>
        <img src={student2} class="w-100" alt="..."/>      
        </Col>
        <Col className='col-md-8 col-12'>
            <div className='p-3'>
            <img src={quat} class="d-block w-25" alt="..."/>
            <h5 className='pt-3'>"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy"</h5>   
            <h6 className='fw-bold pt-5'>Devid Warner</h6>
            <h6>Student</h6>
            </div>
        </Col>
    </Row>
    </div>
  </div>
</div>
        </Container>
    ) 
}

export default Feedback;