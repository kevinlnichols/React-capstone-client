import React from 'react';

import './nav.css';

export default function Nav(props) {
    return (
        <nav className="main-nav">
            <ul className="nav-ul">
                <li className="nav-li"><a href="/dashboard">Dashboard</a></li>
                <li className="nav-li"><a href="/">Logout</a></li>
            </ul>
        </nav>
    );
}