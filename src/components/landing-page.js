import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import './landing-page.css';
import '../index.css';

import LoginForm from './login-form';
import Header from './header';
import TitleImage from './photos/title.jpeg';

var sectionStyle = {
    backgroundImage: `url(${TitleImage})`,
    backgroundSize: 'cover',
    overflow: 'hidden'
  };

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
            </section>
            <section className="landing-section second">
                <div className="section1 home-text1">
                    <h2>Not sure where to eat?</h2>
                    <p className="landing-paragraph">Create groups with friends and coworkers.<br /> Everyone in the group votes on the category of food they want.</p>
                </div>
                <div className="section1">
                    <img className="food" src="https://farm5.staticflickr.com/4667/39698565214_a4d86fae83_o.jpg" alt="Picture of dessert" />
                </div>
            </section>
            <section className="landing-section first">
                <div className="section1">
                    <img className="food" src="https://farm5.staticflickr.com/4632/38598197860_c37e845d5c_o.jpg" alt="Burger" />
                </div>
                <div className="section1 home-text2">
                    <h2>Choose from places nearby</h2>
                    <p className="landing-paragraph">Based on the category chosen, everyone in the group votes on restuarants in that category. <br /> Afterward, everyone in the groups assigns a rating to the restuarant.</p>
                </div>
            </section>
            <section className="landing-section second pre-login">
                <div className="section1 home-text3">
                    <h2>Get directions</h2>
                    <p className="landing-paragraph">This application uses Googles Directions API</p>
                </div>
                <div className="section1">
                    <img className="food" src="https://farm5.staticflickr.com/4755/38598198140_065039fdf2_o.jpg" alt="Tacos" />
                </div>
            </section>
            <section className="landing-section">
                <div className="login-section">
                    <h2>Get Started</h2>
                    <LoginForm />
                    <Link to="/register" style={{ textDecoration: 'none' }}><p className="link">Register</p></Link>
                </div>
            </section>
        </main>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);