import React from 'react';

import './find-friends-page.css';

import Header from './header';
import SearchBar from './search-bar';
import requiresLogin from './requires-login';

class FindFriendsPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <main role="main" className="find-friends-page">
                <Header />
                <div className="find-users-input">
                    <p>To see if a friend was successfully added navigate
                        back to the Dashboard
                    </p>
                    <SearchBar friends={this.props.friends} />
                </div>
            </main>
        )
    }
}

export default requiresLogin()(FindFriendsPage);