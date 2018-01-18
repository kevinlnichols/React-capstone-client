import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import initialState from '../state'

import QuizDetails from './quiz-details';
import QuestionContainer from './question-container';
import Header from './header';

export class TestBuilder extends React.Component {
    constructor (props) {
        super(props);
        this.state = initialState;
    }
    render() {
        return (
            <main role="main">
                <Header />
                <QuizDetails />
                <QuestionContainer questions={this.state.questions} />
            </main>
        );
    }
}

export default (TestBuilder);