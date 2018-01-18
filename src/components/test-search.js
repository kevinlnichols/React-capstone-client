import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

export default function TestSearch(props) {
   
    
    return (
        <div className="test-search-container">
            <div>
                <label>Search For A Test By Category</label>
            </div>
            <select name="Category">
            <option>Geography</option>
            <option>Math</option>
            <option>Biology</option>
       </select>
        </div>
    );
}


