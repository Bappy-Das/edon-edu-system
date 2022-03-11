import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LatestBlog.css'
const LatestBlog = () => {


    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://radiant-island-49212.herokuapp.com/allBlog')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])

    return (
        <div className='container'>
            <div className='text-center'>
                <h1 className=" pb-5 fw-bold">Latest From Our Blogs</h1>

                <Row xs={1} md={3} className="g-4">
                    {
                        blogs.slice(0, 3).map(bloginfo =>
                            <Col>
                                <Card>
                                    <div className='img-blog-populer'>
                                        <Card.Img className='img-fluid' variant="top" src={bloginfo?.img} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                </Row>
            </div>
        </div>
    );
};

export default LatestBlog;