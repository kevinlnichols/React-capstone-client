import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import './find-friends-page.css';

import Header from './header';
import SearchBar from './search-bar';

let users = [
    {
        id: 1,
        firstName: 'Kevin',
        lastName: 'Nichols'
    },
    {
        id: 2,
        firstName: 'Julie',
        lastName: 'Nichols'
    },
    {
        id: 3,
        firstName: 'Finn',
        lastName: 'Nichols'
    },
    {
        id: 4,
        firstName: 'Milo',
        lastName: 'Nichols'
    },
    {
        id: 5,
        firstName: 'Maple',
        lastName: 'Nichols'
    },
]

export function FindFriendsPage(props) {
    console.log(users);
    return (
        <main role="main" className="find-friends-page">
            <Header />
            <div className="find-users-input">
                <SearchBar users={users} />
            </div>
        </main>
    );
}

export default (FindFriendsPage);