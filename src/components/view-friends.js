import React from 'react';
import {addFriend} from '../actions';
import {connect} from 'react-redux';

import './view-friends.css';

export class ViewFriends extends React.Component {
    constructor(props) {
        super(props);
        
    }
 
    render() {
        console.log(this.props.friends);
        return (
            <ul>
               {this.props.friends.map((friend, index) => <li className="friend-box" key={index}>{friend.firstName} {friend.lastName}</li>)}
            </ul>
        );
    }
}

export default(ViewFriends);