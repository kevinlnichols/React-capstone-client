import React from 'react';
import {connect} from 'react-redux';

import './dashboard.css';

import Header from './header';
import TestSearch from './test-search';

export class Dashboard extends React.Component {
    render() {
        return (
            <main role="main">
                <Header />
                <section>
                <header>
                    <h3>Hello Kevin</h3>
                </header>
                </section>
                <section>
                <div>
                    <table>
                    <tr>
                        <th>Test Name</th>
                        <th>Score</th>
                    </tr>
                    <tr>
                        <td>Geography Quiz</td>
                        <td>90%</td>
                    </tr>
                    <tr>
                        <td>Math Quiz</td>
                        <td>100%</td>
                    </tr>
                    </table>
                </div>
                <div>
                    <table>
                    <tr>
                        <th>Revisions Accepted: </th>
                        <th>2</th>
                    </tr>
                    </table>
                </div>
                <div>
                    <table>
                    <tr>
                        <th>Tests Created: </th>
                        <th>20</th>
                    </tr>
                    </table>
                </div>
                </section>
                <section>
                    <TestSearch />
                </section>
            </main>
        );
    }
}

/*const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};*/

export default (Dashboard);