import React from 'react';
import {addFriend} from '../actions';
import {connect} from 'react-redux';

export class ViewFriends extends React.Component {
    constructor(props) {
        super(props);
        
    }
 
    render() {
        console.log(this.props.friends);
        return (
            <ul>
               {this.props.friends.map((friend, index) => <li key={index}>{friend.name.firstName}</li>)}
            </ul>
        );
    }
}

export default(ViewFriends);