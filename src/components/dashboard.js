import React from 'react';
import { connect } from 'react-redux';

import './dashboard.css';

import Header from './header';
import OptionsButton from './options-button';
import ViewFriends from './view-friends';
import { viewFriend } from '../actions/users.js';
import { fetchProtectedData } from '../actions/protected-data';
import requiresLogin from './requires-login';

export class Dashboard extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
        this.props.dispatch(viewFriend());
    }


    render() {
        return (
            <main role="">
                <Header />
                <section className="row">
                    <div className="column left">
                        <header>
                            <h3>Hello {this.props.fullName}</h3>
                        </header>
                        <div>
                            <OptionsButton />
                        </div>
                    </div>
                    <div className="column middle">
                        <h5>Groups</h5>
                        <div className="group-box">
                            <p>Hello</p>
                        </div>
                        <div className="group-box">
                            <p>Hello this is a group with a much longer title.</p>
                        </div>
                    </div>
                    <div className="column right">
                        <h5>Friends</h5>
                        <div>
                        {console.log(this.props.friends)}
                            <ViewFriends friends={this.props.friends} />
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        fullName: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data,
        friends: state.auth.currentUser.friends,
        username: state.auth.currentUser.username
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));