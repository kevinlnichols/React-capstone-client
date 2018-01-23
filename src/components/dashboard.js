import React from 'react';
import {connect} from 'react-redux';

import './dashboard.css';

import Header from './header';
import OptionsButton from './options-button';

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
                        <OptionsButton />
                    </div>
                </section>
                <section>

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