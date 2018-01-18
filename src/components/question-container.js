import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import Question from './question';

export function QuestionContainer(props) {
    console.log(props.newQuestion);
    const questions = props.questions.map((question, index) => {
        return (
            <li key={index}><Question question={question}/></li>
        );
    })
    return (
        <div className="question-container">
            {questions}
        </div>
    );
}



export default (QuestionContainer);