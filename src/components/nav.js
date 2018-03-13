import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';



import './nav.css';

export class Nav extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton =
                <ul className="nav-ul">
                    <li className="nav-li"><a href="/dashboard">Dashboard</a></li>
                    <li className="nav-li"><button href="/" onClick={() => this.logOut()}>Log Out</button></li>
                </ul>
        }
        return (
            <nav className="main-nav">
                {logOutButton}
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Nav);