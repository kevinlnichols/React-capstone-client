import React from 'react';

import './nav.css';

export default function Nav(props) {
    return (
        <nav>
            <ul>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/createTest">Create Test</a></li>
                <li><a href="/">Logout</a></li>
            </ul>
        </nav>
    );
}