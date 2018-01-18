import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import Header from './header';

export class Results extends React.Component {
 
    render() {
        return (
            <main role="main">
                <Header />
                <p>Results</p>
            </main>
        );
    }
}

export default (Results);