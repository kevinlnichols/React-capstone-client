import React from 'react';
import {addFriend} from '../actions';
import {connect} from 'react-redux';

export class ViewFriends extends React.Component {
    constructor(props) {
        super(props);
        
    }


    render() {
        return (
            <ul>
               <p>hello</p>
               {/* {this.initialState.currentUser.friends.map((friend, index) => {
                    <li key={index}>{friend}}</li>
               })} */}
            </ul>
        );
    }
}

export default(ViewFriends);