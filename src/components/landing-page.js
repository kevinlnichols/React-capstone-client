import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import './landing-page.css';
import '../index.css';

import LoginForm from './login-form';
import Header from './header';
import TitleImage from './photos/title.jpeg';
import RedArrow from './photos/down-arrow.png';

var sectionStyle = {
    backgroundImage: `url(${TitleImage})`,
    backgroundSize: 'cover',
    overflow: 'hidden'
};

var registerStyle = {
    color: 'black',
    textDecoration: 'none',
    fontweight: 'bold'
}

export function LandingPage(props) {
    if (props.loggedIn) {

        return <Redirect to='/dashboard' />;
    }

    return (
        <main role="main" className="home">
            <Header />
            <section className="title first" style={sectionStyle}>
                <div className="title-div">
                    <h1 className="landing-h1">Find a Restaurant</h1>
                </div>
                <div className="red-arrow">
                    <a href="#landing-section"><img className="hvr-grow" src={RedArrow} alt="Navigation down arrow" /></a>
                </div>
            </section>
            <section id="landing-section" className="landing-section second">
                <div className="section1 home-text1">
                    <h2>Not sure where to eat?</h2>
                    <p className="landing-paragraph">Create groups with friends and coworkers.<br /> Everyone in the group votes on the category of food they want.</p>
                </div>
                <div className="section1">
                    <img className="food" src="https://farm5.staticflickr.com/4667/39698565214_a4d86fae83_o.jpg" alt="Dessert" />
                </div>
            </section>
            <section className="landing-section first pre-login">
                <div className="section1">
                    <img className="food" src="https://farm5.staticflickr.com/4632/38598197860_c37e845d5c_o.jpg" alt="Burger" />
                </div>
                <div className="section1 home-text2">
                    <h2>Choose from places nearby</h2>
                    <p className="landing-paragraph">Based on the category chosen, nearby <br />
                     restuarants will be shown on a map powered by Googles Places API.</p>
                </div>
            </section>
            <section className="landing-section">
                <div className="login-section">
                    <h2>Get Started</h2>
                    <LoginForm />
                    <Link to="/register" ><p style={registerStyle} className="link">Register</p></Link>
                </div>
            </section>
        </main>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);