import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import './landing-page.css';
import '../index.css';

import LoginForm from './login-form';
import Header from './header';

export function LandingPage(props) {
    if (props.loggedIn) {
        return <Redirect to='/dashboard' />;
    }

    return (
        <main role="main" className="home">
            <Header />
            <h1>Quiz Builder</h1>
            <section>
                <header>
                    <h3>Create and share tests</h3>
                </header>
                <p>Create quizzes consisting of multiple choice and true or false questions. Share with others and take their quizzes by searching through a variety of categories.</p>
            </section>
            <section>
                <header>
                    <h3>Help manage the integrity of the tests</h3>
                </header>
                <p>If you feel like an incorrect answer is given as a correct solution, then challenge it! Suggest the real answer, and if enough people vote for your revision then your edit will be accepted!</p>
            </section>
            <section>
                <header>
                    <h3>Track your progress</h3>
                </header>
                <p>Keep track of your scores, tests created, and revisions accepted. As more revisions are accepted you go up in rank!</p>
            </section>
            <section>
                <header>
                    <h3>Get Started</h3>
                </header>
                <LoginForm />
                <Link to="/register" style={{textDecoration: 'none'}}><p className="link">Register</p></Link>
            </section>
        </main>
    );
}

/*const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});*/

export default (LandingPage);