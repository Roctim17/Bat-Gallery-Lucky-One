import React from 'react';

const Header = () => {
    return (
        <div>
            <nav>
                <img src="logo192.png" alt="" />
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