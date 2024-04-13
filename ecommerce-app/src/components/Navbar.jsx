import React from 'react';
import '../css/navbar.scss';
function Navbar() {
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/public/logo.png" alt="MyState" />
                <span>MudasirState</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                <a href="/">Login</a>
                <a href="/" className='register'>SignUp</a>
            </div>
        </nav>
    );
}

export default Navbar;
