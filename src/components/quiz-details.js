import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import './quiz-details.css';

import CreateQuestion from './create-question';

export function QuizDetails(props) {
    

    return (
        <section className="quiz-details">
            <form>
                <div className="quiz-title">
                    <label className="label-margin">Quiz Title: </label>
                    <input type="text" required/>
                </div>
                <label className="label-margin">Category: </label>
                <select name="Category">
                    <option>Geography</option>
                    <option>Math</option>
                    <option>Biology</option>
                </select>
            </form>
            <CreateQuestion />
        </section>
    );
}



export default (QuizDetails);