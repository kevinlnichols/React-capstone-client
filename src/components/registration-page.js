import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import './registration-page.css';

import RegistrationForm from './registration-form';

let loginStyle = {
    color: 'black'
}

export function RegistrationPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="register-home">
            <h2>Register</h2>
            <RegistrationForm />
            <Link style={loginStyle} to="/">Login</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);