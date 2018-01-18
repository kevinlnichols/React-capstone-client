import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

export default function Question(props) {
   
    
    return (
        <div className="question">
           <p>{props.question.title}</p>
        </div>
    );
}



