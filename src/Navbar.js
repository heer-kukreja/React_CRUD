import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <h1>Hesper's Chaos and Calm</h1>
                <div className="links">
                    <Link to="/">Heart</Link>
                    <Link to="/create">Create Chaos</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
