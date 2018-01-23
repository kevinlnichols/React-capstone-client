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
            <h1>Working Title: Find a Restaurant</h1>
            <section>
                <header>
                    <h3>Not sure where to eat?</h3>
                </header>
                <p>Create groups with friends and coworkers. Everyone in the group votes on the category of food they want.</p>
            </section>
            <section>
                <header>
                    <h3>Choose from places nearby</h3>
                </header>
                <p>Based on the category chosen, everyone in the group votes on restuarants in that category. Afterward, everyone in the groups assigns a rating to the restuarant.</p>
            </section>
            <section>
                <header>
                    <h3>Get directions</h3>
                </header>
                <p>This application uses Googles Directions API</p>
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