import React from 'react';

import './find-friends-page.css';

import Header from './header';
import SearchBar from './search-bar';
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

export default requiresLogin()(FindFriendsPage);