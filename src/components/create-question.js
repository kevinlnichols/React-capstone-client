import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import Question from './question';
import QuestionContainer from './question-container';

import './create-question.css';

export class CreateQuestion extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isCreatingQuestion: false,
            newQuestion: {
                title: '',
                category: '',
                type: 0,
                choices: [],
                correctChoice: 0
            }
        };
    }

    startCreateQuestion () {
        this.setState ({
            isCreatingQuestion: true
        })
    }

    changeQuestionType (type) {
        this.setState ({
            newQuestion: {type}
        })
    }

    selectCorrectAnswer (correctChoice) {
        let currentQuestion = this.state.newQuestion;
        currentQuestion.correctChoice = correctChoice;
        this.setState ({
            newQuestion: currentQuestion
        });
    }

    createQuestionChoices () {

    }

    addQuestion () {
        const newQuestion = {
            title: this.qTitleInput.value,
            type: this.state.newQuestion.type,
            choices: [this.choiceInput0.value, this.choiceInput1.value, this.choiceInput2.value, this.choiceInput3.value],
            correctChoice: this.state.newQuestion.correctChoice
        }
        console.log(newQuestion);
        console.log("add", this.state);
    }

    render () {
        
        return (
            <div className="create-question">
                <form>
                    <div className="multiple-choice-container">
                        <label className="label-margin question-type">Question Type: </label>
                        <div className="multiple-choice">
                            <div>
                                <input className="label-margin" type="radio" value="True/False"  onClick={() => this.changeQuestionType(0)}/>True/False
                            </div>
                            <div>
                                <input className="label-margin" type="radio" value="Multiple Choice"  onClick={() => this.changeQuestionType(1)}/>Multiple Choice
                            </div>
                        </div>
                        <input className="button" type="button" value="Submit Type" onClick={() => this.startCreateQuestion()}/>
                    </div> 
                    {this.state.isCreatingQuestion && this.state.newQuestion.type == 0 && (
                        <div className="multiple-choice-container">
                            <p>Set the correct answer by checking the box next to the correct choice</p>
                            <div>
                                <label>Question: </label>
                                <input className="input-question" type="text" ref={input => this.qTitleInput = input}/>
                            </div>
                            <div className="multiple-choice">
                                <div className="true-false">
                                    <input type="radio" value="True" onClick={() => this.selectCorrectAnswer(0)}/><label>True </label>
                                </div>
                                <div className="true-false">
                                    <input type="radio" value="False" onClick={() => this.selectCorrectAnswer(1)}/><label>False </label>
                                </div>
                            </div>
                            <input className="button" type="button" value="Add Question"  onClick={() => this.addQuestion()}/>
                        </div>
                    )}
                    {this.state.isCreatingQuestion && this.state.newQuestion.type == 1 && (
                        <div className="multiple-choice-container">
                        <p>Set the correct answer by checking the box next to the correct choice</p>
                            <div>
                                <label>Question: </label>
                                <input className="input-question" type="text" ref={input => this.qTitleInput = input}/>
                            </div>
                            <div className="multiple-choice">
                                <div>
                                    <label>Choice 1: </label>
                                    <input className="radio" type="checkbox" onClick={() => this.selectCorrectAnswer(0)}/><input type="text" ref={index0 => this.choiceInput0 = index0}/>
                                </div>
                                <div>
                                    <label>Choice 2: </label>
                                    <input type="checkbox" onClick={() => this.selectCorrectAnswer(1)}/><input type="text" ref={index1 => this.choiceInput1 = index1}/>
                                </div>
                                <div>
                                    <label>Choice 3: </label>
                                    <input type="checkbox" onClick={() => this.selectCorrectAnswer(2)}/><input type="text" ref={index2 => this.choiceInput2 = index2}/>
                                </div>
                                <div>
                                    <label>Choice 4: </label>
                                    <input type="checkbox" onClick={() => this.selectCorrectAnswer(3)}/><input type="text" ref={index3 => this.choiceInput3 = index3}/>
                                </div>
                            </div>
                            <input className="button" type="button" value="Add Question"  onClick={() => this.addQuestion()}/>
                        </div>
                    )}
                </form>
                <div>
                   
                </div>
            </div>
            
        );
    }
}



export default (CreateQuestion);