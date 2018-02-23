import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

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
            <section className="title first">
                <h1 className="landing-h1">Working Title: Find a Restaurant</h1>
            </section>
            <section className="second">
                <div className="section1 home-text1">
                    <h3>Not sure where to eat?</h3>
                    <p>Create groups with friends and coworkers.<br/> Everyone in the group votes on the category of food they want.</p>
                </div>
                <div className="section1">
                    <img className="food" src="https://farm5.staticflickr.com/4667/39698565214_a4d86fae83_o.jpg" alt="Picture of dessert" />
                </div>
            </section>
            <section className="first">
                <div className="section1">
                    <img className="food" src="https://farm5.staticflickr.com/4632/38598197860_c37e845d5c_o.jpg" alt="Burger" />
                </div>
                <div className="section1 home-text2">
                    <h3>Choose from places nearby</h3>
                    <p>Based on the category chosen, everyone in the group votes on restuarants in that category. <br/> Afterward, everyone in the groups assigns a rating to the restuarant.</p>
                </div>
            </section>
            <section className="second">
                <div className="section1 home-text3">
                    <h3>Get directions</h3>
                    <p>This application uses Googles Directions API</p>
                </div>
                <div className="section1">
                    <img className="food" src="https://farm5.staticflickr.com/4755/38598198140_065039fdf2_o.jpg"  alt="Tacos" />
                </div>
            </section>
            <section className="second">

                <h3>Get Started</h3>

                <LoginForm />
                <Link to="/register" style={{ textDecoration: 'none' }}><p className="link">Register</p></Link>
            </section>
        </main>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);