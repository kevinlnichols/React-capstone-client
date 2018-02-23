import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './options.css';

export class Options extends React.Component {


    render() {
        return (
            <div className="options">
                <div className="find-create-buttons">
                    <Link className="find-friends" to="/find-friends-page" >Find People</Link>
                </div>
                <div className="find-create-buttons">
                    <a className="create-group" href="/create-groups-page">Create Group</a>
                </div>
            </div>
        );
    }
}

export default (Options);