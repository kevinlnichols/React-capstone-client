import React from 'react';
import {connect} from 'react-redux';

import './options.css';

export class Options extends React.Component {


    render() {
        return (
            <div className="options">
                <div className="find-create-buttons">
                    <a className="find-friends" href="/find-friends-page" >Find People</a>
                </div>
                <div className="find-create-buttons">
                    <a className="create-group" href="/create-groups-page">Create Group</a>
                </div>
            </div>
        );
    }
}

export default (Options);