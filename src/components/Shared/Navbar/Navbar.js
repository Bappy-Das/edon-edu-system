import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <div className="navbar-container">
                <div className="navbar-wrapper">
                    <div className="navbar-left">
                        <a href="##"><img src="https://i.ibb.co/HN4PWQy/logo-1.png" alt="" /></a>
                    </div>
                    <div className="navbar-center navbar-style">
                        <a href="##">Home</a>
                        <a className='p-4' href="##">Courses</a>
                        <a href="##">Pages</a>
                        <a className='p-4' href="##">Blog</a>
                        <a href="##">Contact</a>
                    </div>
                    <div className="navbar-right">
                        <div className="search-container">
                            <input className='navbar-input' placeholder="Search courses..." type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;