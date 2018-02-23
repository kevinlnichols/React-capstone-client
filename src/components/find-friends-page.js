import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import './find-friends-page.css';

import Header from './header';
import SearchBar from './search-bar';
import { fetchProtectedData } from '../actions/protected-data';
import requiresLogin from './requires-login';

export function FindFriendsPage(props) {
    return (
        <main role="main" className="find-friends-page">
            <Header />
            <div className="find-users-input">
                <SearchBar />
            </div>
        </main>
    );
}

export default (FindFriendsPage);