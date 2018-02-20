import React from 'react';
import { connect } from 'react-redux';

import './dashboard.css';

import Header from './header';
import OptionsButton from './options-button';
import ViewFriends from './view-friends';
import { viewFriend } from '../actions/index.js';

export class Dashboard extends React.Component {

    componentDidMount() {
        this.props.dispatch(viewFriend());
    }


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
                    <div>
                        <ViewFriends friends={this.props.friends}/>
                    </div>
                </section>
            </main>
        );
    }
}

const mapStateToProps = state => {
    //const {currentUser} = state.auth;
    return {
        // fullName: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data,
        friends: state.friendsReducer.friends
    };
};

export default connect(mapStateToProps)(Dashboard);