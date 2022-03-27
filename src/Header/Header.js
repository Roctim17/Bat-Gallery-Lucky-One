import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav>
                <div className="img">BAT-GALLERY</div>
                <div className="menu">
                    <a href="#Home">Home</a>
                    <a href="#About">About</a>
                    <a href="#Contact">Contact</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;