import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="header-container">
                <div className="header-wrapper">
                    <div className="header-left header-style">
                        <a className='p-4' href="tel:+1(135)-1984-2020">+1(135) 1984 2020</a>
                        <a href="mailto:hello@edon.com">hello@edon.com</a>
                    </div>
                    <div className="header-right header-style">
                        <a href="#login">Log In</a>
                        <a className='p-4' href="#register">Register</a>
                        <a href="#language">English</a>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Header;