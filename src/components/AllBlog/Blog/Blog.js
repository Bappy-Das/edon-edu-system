import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = ({ blogs }) => {

    const { _id, title, srtText, img } = blogs;
    return (
        <div >
            <Link className="text-decoration-none dark" to="/">

                <div className="col">
                    <div className="card">
                        <img src={img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Blog;