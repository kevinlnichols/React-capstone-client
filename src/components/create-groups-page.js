import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import Header from './header';

export function CreateGroupsPage(props) {

    return (
        <main role="main" className="create-groups-page">
            <Header />
            
        </main>
    );
}

export default (CreateGroupsPage);