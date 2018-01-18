import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import Header from './header';

export class TakeTest extends React.Component {
 
    render() {
        return (
            <main role="main">
                <Header />
                <p>Take Test</p>
            </main>
        );
    }
}

export default (TakeTest);