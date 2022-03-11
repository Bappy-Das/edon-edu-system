import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://radiant-island-49212.herokuapp.com/allBlog')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])

    return (
        <div>
            <div className='row'>
                <div className='col-7 container'>
                    <h1>Collom 9</h1>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {
                            blogs.map(blog => <Blog blogs={blog}>
                            </Blog>)
                        }
                    </div>
                </div>
                <div className='col-3 container'>
                    <div className=''>
                        <h3 className='text-bold' >Categories</h3>
                        <table className="table">

                            <tbody>
                                <tr>
                                    <td>Education</td>
                                    <td>(5)</td>
                                </tr>
                                <tr>
                                    <td>Business</td>
                                    <td>(1)</td>
                                </tr>
                                <tr>
                                    <td>Human Resources</td>
                                    <td>(1)</td>
                                </tr>
                                <tr>
                                    <td>Investment</td>
                                    <td>(1)</td>
                                </tr>
                                <tr>
                                    <td>Lifestyle</td>
                                    <td>(0)</td>
                                </tr>
                                <tr>
                                    <td>English</td>
                                    <td>(0)</td>
                                </tr>
                                <tr>
                                    <td>Marketing</td>
                                    <td>(1)</td>
                                </tr>
                                <tr>
                                    <td>Management</td>
                                    <td>(0)</td>
                                </tr>
                                <tr>
                                    <td>Video</td>
                                    <td>(1)</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className=''>
                        <h3>Recent post </h3>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://i.ibb.co/B25qMfy/traction-control-system-tcs-in-motorcycles-and-how-it-works.webp" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a ittle bit longer.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://i.ibb.co/B25qMfy/traction-control-system-tcs-in-motorcycles-and-how-it-works.webp" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a ittle bit longer.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <h3>Popular search </h3>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-primary m-1">Left</button>
                            <button type="button" className="btn btn-outline-primary m-1">Left</button>
                            <button type="button" className="btn btn-outline-primary m-1">Left</button>
                            <button type="button" className="btn btn-outline-primary m-1">Left</button>

                        </div>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-primary m-1">Left</button>
                            <button type="button" className="btn btn-outline-primary m-1">Left</button>
                            <button type="button" className="btn btn-outline-primary m-1">Left</button>
                            <button type="button" className="btn btn-outline-primary m-1">Left</button>

                        </div>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-primary m-1">Left</button>
                            <button type="button" className="btn btn-outline-primary m-1">Left</button>
                            <button type="button" className="btn btn-outline-primary m-1">Left</button>
                            <button type="button" className="btn btn-outline-primary m-1">Left</button>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;