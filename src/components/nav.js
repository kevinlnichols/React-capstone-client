import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import './nav.css';

import BackButton from './back-button';

let styles = {
    largeIcon: {
        height: '50px',
        width: '50px',
        color: 'antiquewhite',
        paddingBottom: '10px'
    }
};

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
                    <li className="nav-li" ><BackButton /></li>
                    <li className="nav-li"><Link to="/dashboard">Dashboard</Link></li>
                    <li className="nav-li"><button href="/" onClick={() => this.logOut()}>Log Out</button></li>
                </ul>
        }
        let logOutButtonIcon;
        if (this.props.loggedIn) {
            logOutButtonIcon =
                <IconMenu
                    className="icon-menu"
                    iconButtonElement={<IconButton iconStyle={styles.largeIcon} ><MoreVertIcon /></IconButton>}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                    targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                >
                    <BackButton />
                    <ul className="nav-ul">
                        <li className="nav-li-icon dashboard-icon"><Link to="/dashboard">Dashboard</Link></li>
                        <li className="nav-li-icon logout"><button href="/" onClick={() => this.logOut()}>Log Out</button></li>
                    </ul>
                </IconMenu>
        }
        return (
            <div>
                <nav className="main-nav">
                    {logOutButton}
                </nav>
                <nav className="main-nav-icon">
                    {logOutButtonIcon}
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Nav);